var app = angular.module( 'myApp', ['ngRoute', 'leaflet-directive'] );

	// configure our routes
    app.config(function($routeProvider) {
        $routeProvider

            //route for the standard page
            .when('/', {
                templateUrl : 'Leaflet/leaflet.html',
                controller  : 'leafletController'
            })

            .when('/leaflet', {
                templateUrl : 'Leaflet/leaflet.html',
                controller  : 'leafletController'
            })

            .when('/mapBox', {
                templateUrl : 'MapBox/mapBox.html',
                controller  : 'mapBoxController'
            })

            .when('/mapQuest', {
                templateUrl : 'MapQuest/mapQuest.html',
                controller  : 'mapQuestController'
            })
    });

