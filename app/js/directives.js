
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
        scope: true,
        templateUrl: '/templates/menu.html',
        replace: true,
        link: function($scope){
            var list = [
                {
                    title: 'Cart',
                    href: '/cart',
                    active: false
                },
                {
                    title: 'Catalog',
                    href: '/',
                    active: false
                }
            ];
            $scope.currentUrl = $location.path();
            $scope.$on('$routeChangeStart', function($event, next) {
                $scope.currentUrl = next.$$route.originalPath;
            });
            $scope.$watch('currentUrl', function(){
                $scope.list = list.map(function(el){
                    if(el.href === $location.path()){
                        el.active = true;
                    }
                    else{
                        el.active = false;
                    }
                    return el;
                });
            });
            $scope.to = function(e){
                e.preventDefault();
                var path = e.target.getAttribute('href');
                $location.path(path)
            };
        }
    }
}]);


