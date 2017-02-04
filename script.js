window.addEventListener("deviceorientation", handleOrientation, true);

var alpha = 0;
var beta = 0;
var gamma = 0;

function handleOrientation(event) {
	var absolute = event.absolute;
	
	if(event.alpha != alpha) {
		alpha = event.alpha;
		document.getElementById('gyro').innerHTML = alpha;
		console.log(alpha);	
	}
}
