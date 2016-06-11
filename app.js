var app = angular.module( 'myApp', ['ngRoute'] );

	// configure our routes
    app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            // .when('/', {
            //     templateUrl : 'MapQuest/mapQuest.html',
            //     controller  : 'mainQuestController'
            // })

            .when('/mapQuest', {
                templateUrl : 'MapQuest/mapQuest.html',
                controller  : 'mainQuestController'
            })
    });

