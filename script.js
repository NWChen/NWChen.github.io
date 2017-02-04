window.addEventListener("deviceorientation", handleOrientation, true);

var alpha = 0;
var beta = 0;
var gamma = 0;


function handleOrientation(event) {
	var absolute = event.absolute;
	
	if(event.alpha != alpha) {
		alpha = event.alpha;
		document.getElementById('alpha').innerHTML = alpha;
		console.log(alpha);	
	}

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
}
