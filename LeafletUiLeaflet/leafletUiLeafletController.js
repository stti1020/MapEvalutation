
angular.module( 'myApp')
	.controller('leafletUiLeafletController', ['$scope', 'leafletData', function($scope, leafletData) {

	// make map
	angular.extend($scope, {
	    center: {
	        lat: 57.74,
	        lng: 11.94,
	        zoom: 8
	    }
	});

	leafletData.getMap("mymap").then(function(map) {

		 alert('I have accessed the map.');
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);

		L.Routing.control({
		    waypoints: [
		        L.latLng(57.74, 11.94),
		        L.latLng(57.6792, 11.949)
		    ]
		}).addTo(map);
    });

}]);