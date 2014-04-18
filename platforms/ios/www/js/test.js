$(document).on('ready' , function(){

	function onDeviceReady() {
       navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

    function onSuccess(position){

    	$.ajax({
    		type: 'GET',
    		url:"http://127.0.0.1:3000/endpoint",
    		data: {latitude:position.coords.latitude , longitude: position.coords.longitude},
    		dataType: 'jsonp',
    		contentType: 'application/json',
    		crossDomain: true,
    		success: function(data){
    			console.log('data successfully sent');
    		},
    		error: function(){
    			console.log('there was an error');
    		}
    	});

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