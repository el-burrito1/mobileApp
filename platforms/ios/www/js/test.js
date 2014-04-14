$(document).on('ready' , function(){

	// function initialize() {
	//   var mapOptions = {
	//     center: new google.maps.LatLng(-34.397, 150.644),
	//     zoom: 8
	//   };
	//   var map = new google.maps.Map(document.getElementById("map-canvas"),
	//       mapOptions);
	// }
	// google.maps.event.addDomListener(window, 'load', initialize);

	function onDeviceReady() {
       navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

    function onSuccess(position){
    	console.log(position.coords.longitude);
    	console.log(position.coords.latitude);
    	function initialize() {
    	  var mapOptions = {
    	    center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
    	    zoom: 14
    	  };
    	  var map = new google.maps.Map(document.getElementById("map-canvas"),
    	      mapOptions);
    	}
    	google.maps.event.addDomListener(window, 'load', initialize);
    }

    function onError(error){
    	console.log(error);
    }

    onDeviceReady();




})