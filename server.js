'use strict';

const express = require('express');
const crypto = require('crypto');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const app = express();

/*var storage = multer.diskStorage({
	destination: './uploads/',
	filename: function(req, file, cb){
		crypto.pseudoRandomBytes(16, function (err, raw) {
			if(err) {return cb(err)}
			cb(null, raw.toString('hex') + path.extname(file.originalname))

		})
	}
});
var upload = multer({storage: storage});*/
const upload = multer({dest: './uploads/'})

const port = process.env.PORT || 5000;

app.set('port', port);

app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser());

app.post('/file', upload.any(), function(req, res){
	let size = req.files[0].size;
	let name = req.files[0].originalname;
	let type = req.files[0].mimetype;
	res.json({filename: name, filetype: type, filesize: size});
})

app.listen(app.get('port'), _ => 
	console.log('Server listening on port ' + port)
);