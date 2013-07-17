function upload() {
	$('#file').trigger('click');
	return false;
}
$(document).ready(function() {
	$('#file').change(function() {
		var file = $('#file').val();
		$('#dummy').val(file);
	});
});