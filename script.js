window.addEventListener("deviceorientation", handleOrientation, true);

var alpha = -1;
var beta = -1;
var gamma = -1;

function handleOrientation(event) {
	var absolute = event.absolute;
	
	if(event.alpha != alpha) {
		alpha = event.alpha;
		document.getElementById('alpha').innerHTML = alpha;
		console.log(alpha);	
	}
/*
	if(event.beta != beta) {
		beta = event.beta;
		document.getElementById('beta').innerHTML = beta;
		console.log(beta);
	}	

	if(event.gamma != gamma) {
		gamma = event.gamma;
		document.getElementById('gamma').innerHTML = gamma;
		console.log(gamma);
	}
*/
}
