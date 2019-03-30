
var cartApp = angular.module('cartApp', ['ngSanitize', 'productList', 'menu']);

cartApp.controller('cartController', ['$location', '$scope', 'cartService', function($location, $scope, cartService) {
    $scope.list = cartService.get();
    $scope.total = cartService.getTotalSumm();
    $scope.remove = function(id){
        $scope.list = cartService.remove(id);
        $scope.total = cartService.getTotalSumm();
    }
    $scope.changeCount = function(id, counter){
        $scope.list = cartService.changeCount(id, counter);
        $scope.total = cartService.getTotalSumm();
    }
}]);
