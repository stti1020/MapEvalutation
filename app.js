var app = angular.module( 'myApp', ['ngRoute'] );

	// configure our routes
    app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'MapQuest/mapQuest.html',
                controller  : 'mapQuestController'
            })

            .when('/mapQuest', {
                templateUrl : 'MapQuest/mapQuest.html',
                controller  : 'mapQuestController'
            })

            .when('/mapBox', {
                templateUrl : 'MapBox/mapBox.html',
                controller  : 'mapBoxController'
            })
    });

