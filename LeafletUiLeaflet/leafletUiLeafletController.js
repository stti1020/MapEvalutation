
angular.module( 'myApp')
	.controller('leafletUiLeafletController', ['$scope', 'leafletData', function($scope, leafletData) {

	// make map
	angular.extend($scope, {
	    center: {
	        lat: 49.011398,
	        lng: 8.423681,
	        zoom: 8
	    }
	});

	//get leaflet via id from html
	leafletData.getMap("mymap").then(function(map) {

		L.Routing.control({
		    waypoints: [
		        L.latLng(49.011398, 8.423681),
		        L.latLng(49.014575, 8.388844)
		    ],
		   
 			routeWhileDragging: true,
 			geocoder: L.Control.Geocoder.nominatim()

		}).addTo(map);


		L.marker([49.011398, 8.423681]).addTo(map)
		    .bindPopup('Von Karl Wilhelm Platz')
		    .openPopup();

		L.marker([49.014575, 8.388844]).addTo(map)
		    .bindPopup('Nach Hochschule Karlsruhe');
    	});


}]);