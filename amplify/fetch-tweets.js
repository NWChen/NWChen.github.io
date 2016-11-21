var base_url = "https://api.twitter.com/1.1/search/tweets.json"; 
var tag = "%23" + "trump";
var hub = "51" + "%2C" + "0" + "%2C" + "1000mi";
var include_entities = "true";
var params = [base_url, "?q=", tag, "&geocode=", hub, "&include_entities=", include_entities];
var request_url = "";

$(function() {
	gen_req();
});

function gen_req() {
	for(i=0; i<params.length; i++) {
		request_url += params[i];
	}
	console.log(request_url);
}
