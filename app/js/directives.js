
angular.module('productList',[]).directive('productList', function(){
    return{
        restrict: 'E',
        scope: {
            list: '=',
            simple: '=',
            title: '=',
            addToCart: '=',
            remove: '=',
            changeCount: '=',
        },
        templateUrl: '/templates/products-list.html',
        replace: true
    }
});

angular.module('miniBasket',[]).directive('miniBasket', function(){
    return{
        restrict: 'E',
        scope: {
            total: '='
        },
        templateUrl: '/templates/mini-basket.html',
        replace: true
    }
});

angular.module('menu',['ngRoute']).directive('menu', ['$location', function($location){
    return{
        restrict: 'E',
        templateUrl: '/templates/menu.html',
        replace: true,
        link: function($scope){
            $scope.to = function(e){
                e.preventDefault();
                var path = e.target.getAttribute('href');
                $location.path(path)
            };
        }
    }
}]);


