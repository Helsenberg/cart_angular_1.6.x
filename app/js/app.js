
var App = angular.module('App', ['ngSanitize', 'ngRoute', 'cartApp', 'productsApp', 'menu', 'miniBasket']);

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
]).controller('appController', ['$scope', 'cartService', function($scope, cartService) {
    $scope.$watch(function(){
        return cartService.changed;
     },function(){
        $scope.total = cartService.getTotalSumm();
    })
}]);
