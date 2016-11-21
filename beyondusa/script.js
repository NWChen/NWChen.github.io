var map;

function initMap() {
	map = new google.maps.Map($('#map')[0], {
		center: {lat: 30, lng: 31},
		zoom: 3
	});
	console.log(map);
}
