
var productsApp = angular.module('productsApp', ['ngSanitize', 'productList', 'miniBasket', 'menu']);

productsApp.controller('productsController', ['$location', '$scope', 'productsService', 'cartService', function($location, $scope, productsService, cartService) {
    $scope.list = productsService.get();
    $scope.total = cartService.getTotalSumm();
    $scope.addToCart = function(product){
        cartService.add(product);
        $scope.total = cartService.getTotalSumm();
    }
}]);
