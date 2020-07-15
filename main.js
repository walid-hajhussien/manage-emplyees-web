let app = angular.module("app", ['ui.router']);

// router setup
app.config(function($stateProvider, $urlRouterProvider,$locationProvider){


    $stateProvider.state("/home",{
        url:"/home",
        component:"home",
    });

    // url not found redirect to home
    $urlRouterProvider.otherwise('/home');

    // removing the # from url
    $locationProvider.html5Mode(true).hashPrefix('!');


});