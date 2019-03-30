
var App = angular.module('App', ['ngSanitize', 'ngRoute', 'cartApp', 'homeApp', 'productsApp']);

App.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.when('/cart', {
            templateUrl: 'cart.html',
            controller: 'cartController'
        }).when('/products', {
            templateUrl: 'products.html',
            controller: 'productsController'
        }).when('/', {
            templateUrl: 'home.html',
            controller: 'homeController'
        }).otherwise({redirectTo: '/'});
    }
]);

