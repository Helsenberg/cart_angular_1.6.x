
var productsApp = angular.module('productsApp', ['ngSanitize', 'productList']);

productsApp.controller('productsController', ['$scope', 'productsService', 'cartService', function($scope, productsService, cartService) {
    $scope.list = productsService.get();
    $scope.addToCart = function(product){
        cartService.add(product);
    }
}]);
