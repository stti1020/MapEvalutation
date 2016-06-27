var app = angular.module( 'myApp', ['ngRoute', 'leaflet-directive'] );

	// configure our routes
    app.config(function($routeProvider) {
        $routeProvider

            //route for the standard page
            .when('/', {
                templateUrl : 'leafletUiLeaflet/leafletUiLeaflet.html',
                controller  : 'leafletUiLeafletController'
            })

            .when('/leafletUiLeaflet', {
                templateUrl : 'leafletUiLeaflet/leafletUiLeaflet.html',
                controller  : 'leafletUiLeafletController'
            })

            .when('/leafletAngularLeafletDirective', {
                templateUrl : 'leafletAngularLeafletDirective/leafletAngularLeafletDirective.html',
                controller  : 'leafletAngularLeafletDirectiveController'
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

