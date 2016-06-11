
angular.module( 'myApp')
	.controller('mapQuestController', function($scope) {

	var map, dir;

	map = L.map('map', {
	  layers: MQ.darkLayer(),
	  center: [ 42.346353, -71.415958 ],
	  zoom: 9
	});

	dir = MQ.routing.directions();

	dir.route({
	  locations: [
	     	{ latLng: { lat: 42.346797, lng: -71.547966 }},
	      { latLng: { lat: 41.346797, lng: -71.547966 }},
	      { latLng: { lat: 43.346797, lng: -71.547966 }},
	     { latLng: { lat: 43.346797, lng: -71.547966 }},
	     { latLng: { lat: 44.346797, lng: -71.547966 }},
	     { latLng: { lat: 45.346797, lng: -71.547966 }},
	     { latLng: { lat: 46.346797, lng: -71.547966 } },
	     	{ latLng: { lat: 42.346797, lng: -71.547966 }},
	      { latLng: { lat: 41.346797, lng: -71.547966 }},
	      { latLng: { lat: 43.346797, lng: -71.547966 }},
	     { latLng: { lat: 43.346797, lng: -71.547966 }},
	     { latLng: { lat: 44.346797, lng: -71.547966 }},
	     { latLng: { lat: 45.346797, lng: -71.547966 }},
	     { latLng: { lat: 46.346797, lng: -71.547966 }},

	  ]
	});

	map.addLayer(MQ.routing.routeLayer({
	  directions: dir,
	  fitBounds: true
	}));



	console.log(dir);

	dir.addEventListener('click',
	  function(event) {
	      console.log(event);
	  });

	map.addEventListener('dragend', function (event) {
	  console.log(event);
	  console.log(dir);
	  console.log(dir.direction);
	});
	
});