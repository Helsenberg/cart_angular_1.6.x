
var homeApp = angular.module('homeApp', ['ngSanitize']);

homeApp.controller('homeController', ['$location', '$scope', function($location, $scope) {
    $scope.toCatalog = function(){
        $location.path('products');
    }
}]);
