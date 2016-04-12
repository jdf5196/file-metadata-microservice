$(document).ready(function(){

	var file;
		$('#fileUpload').on('change', function(event){
			file = event.target.files;
		});
	$('form').on('submit', function(event){
		event.preventDefault();
		var fileData = new FormData();
		$.each(file, function(key, value){
			fileData.append(key, value);
		});
		$.ajax({
			url: window.location.origin + '/file',
			type: 'POST',
			data: fileData,
			cache: false,
			contentType: false,
			processData: false,
			success: function(data){

				alert('File name: ' + data.filename+'\nFile size: ' + data.filesize+' bytes\nFile type: '+data.filetype);
			}
		});
	});
});