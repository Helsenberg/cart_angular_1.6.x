
var cartApp = angular.module('cartApp', ['ngSanitize', 'productList']);

cartApp.controller('cartController', ['$scope', 'cartService', function($scope, cartService) {
    $scope.list = cartService.get();
    $scope.remove = function(id){
        $scope.list = cartService.remove(id);
    };
    $scope.changeCount = function(id, counter){
        $scope.list = cartService.changeCount(id, counter);
    };
}]);
