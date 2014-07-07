$(document).ready(function(){

	$("div#demo").jContent({	width: 1200,
                                height: 800, 
                                easing: "easeOutCirc"}); 
	/*var myLatlng = new google.maps.LatLng(32.802341, -117.238873);
	var mapOptions = {
	  zoom: 15,
	  center: myLatlng,
	  scrollwheel: false
	}

	//initialize google maps, centered on myLatLng
	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);*/

	smoothScroll.init();
})