
var App = angular.module('App', ['ngSanitize', 'ngRoute', 'cartApp', 'productsApp']);

App.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.when('/cart', {
            templateUrl: 'cart.html',
            controller: 'cartController'
        }).when('/', {
            templateUrl: 'products.html',
            controller: 'productsController'
        }).otherwise({redirectTo: '/'})
    }
]);

