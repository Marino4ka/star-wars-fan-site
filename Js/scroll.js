var mylocation = 0;

	window.scroll = function e(argument) {
		mylocation = window.pageYOffset;
	}

function scrollToDiv(id) {
	var element = document.getElementById(id);
	var pos = findPosition(element);

	if(mylocation < pos) {
		var interval = setInterval (function(){
			mylocation += 20;
			if(mylocation >= pos){
				clearInterval(interval);
			}
			window.scrollTo(0,mylocation);
		},0);
	} else {
		var interval = setInterval (function(){
			mylocation -= 20;
			if(mylocation <= pos){
				clearInterval(interval);
			}
			window.scrollTo(0,mylocation);
		},0);

	}
}

function findPosition(el) {
	var currentPos = 0;
	if(el.offsetParent) {
		currentPos = el.offsetTop;
	}
	return currentPos;
}