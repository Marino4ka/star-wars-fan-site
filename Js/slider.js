var slider = document.getElementById('slider');
var position = 0;

function goNext() {
	if (position != -200)
		position = position - 100;
	else
		position = 0;

	slider.style.left = position + "%";
}

function goBack() {
	if (position != 0)
		position = position + 100;
	else
		position = -200;

	slider.style.left = position + "%";	
}