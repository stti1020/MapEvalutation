
angular.module( 'myApp')
	.controller('mapBoxController', function($scope) {

mapboxgl.accessToken = 'pk.eyJ1IjoibWFnaWNoYXBwZW5zIiwiYSI6ImNpcGJhNGF2bDAwMTV2aG5ubTQwbjNjN2YifQ.SQ7XYQkjLotyjYSU3sYDVQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v8',
    center: [-79.4512, 43.6568],
    zoom: 13
});

map.addControl(new mapboxgl.Directions());
	
});