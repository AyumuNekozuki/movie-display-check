const ELEMENT_INPUT = document.querySelector('#file-input');
const ELEMENT_VIDEO = document.querySelector('#file-show');

ELEMENT_INPUT.addEventListener('change', (event) => {
	var file = event.target.files[0];
	var fileURL = URL.createObjectURL(file);
	ELEMENT_VIDEO.src = fileURL;
});