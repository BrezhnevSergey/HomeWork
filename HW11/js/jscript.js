

window.onload = function() {
	var width = document.documentElement.clientWidth;
	var height = document.documentElement.clientHeight;
	var fly1 = document.getElementById("fly1");
	var fly2 = document.getElementById("fly2");
	var radius1 = getRandomeRadius();
	var radius2 = getRandomeRadius();
	var angle1 = 0;
	var angle2 = 0;
	var speed1 = 100;
	var speed2 = 50;
	var index1 = 0;
	var index2 = 0;

	randomAppearance();
	
	document.addEventListener("mousemove", handler);

	function handler(e) {
		var centerX = e.offsetX;
		var centerY = e.offsetY;
		if(index1 != 360) {
			angle1 = Math.PI * (index1 / speed1);
			fly1.style.left = (radius1 * Math.cos(angle1) + centerX) + "px";
			fly1.style.top = (radius1 * Math.sin(angle1) + centerY) + "px";
			index1 ++;
		} else {
			index1 = 0;
		}
		if(index2 != 360) {
			angle2 = Math.PI * (index2 / speed2);
 			fly2.style.left = (radius2 * Math.cos(angle2) + centerX) + "px";
			fly2.style.top = (radius2 * Math.sin(angle2) + centerY) + "px";
			index2--;
		} else {
			index2 = 0;
		}
		
	}

	function randomAppearance() {
		fly1.style.left = (Math.random() * width) + "px";
		fly1.style.top = (Math.random() * height) + "px";
		fly2.style.left = (Math.random() * width) + "px";
		fly2.style.top = (Math.random() * height) + "px";
	}

	function getRandomeRadius() {
		var minRadius = 30;
		var maxRadius = 80;
		return Math.round(minRadius + Math.random() * (maxRadius - minRadius));
	}
}