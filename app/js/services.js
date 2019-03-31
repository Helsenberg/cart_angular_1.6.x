
App.factory('productsService',function(){

    function get(){
        return [
            {
                id: 1,
                name: 'Product 1',
                price: 100
            },
            {
                id: 2,
                name: 'Product 2',
                price: 150
            }
        ];
    };

    return{
        get: get
    };
});

App.factory('cartService', function(){
    var storageKey = 'cart__';
    var products = localStorage.getItem(storageKey) ? JSON.parse(localStorage.getItem(storageKey)) : [];
    var changed = 0;
    function get(){
        return products.slice();
    };

    function getProductById(id){
        var res = products.filter(function(product){
            return product.id === id;
        });
        return res.length > 0 ? res[0] : null;
    };

    function remove(id){
        products = products.filter(function(product){
            return product.id != id;
        });
        save();
        return products.slice();
    };

    function add(product){
        var productCart = getProductById(product.id);
        if(productCart){
            productCart.count += 1;
        }
        else{
            product.count = 1;
            products.push(product);
        }
        save();
        return products.slice();
    };

    function changeCount(id, counter){
        var productCart = getProductById(id);
        var newCount = productCart.count + counter;
        if(newCount < 1){
            remove(id);
        }
        productCart.count = newCount;
        save();
        return products.slice();
    }

    function getTotalSumm(){
        return products.reduce(function(acc, el){
            acc += el.price * el.count;
            return acc;
        }, 0);
    }

    function save(){
        factory.changed++;
        localStorage.setItem(storageKey, JSON.stringify(products));
    };

    var factory = {
        changed: 0,
        get: get,
        add: add,
        remove: remove,
        getTotalSumm: getTotalSumm,
        changeCount: changeCount
    };

    return factory;
});
