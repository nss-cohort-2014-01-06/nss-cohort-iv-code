/* exported Cart */

var Cart = (function(){

  'use strict';

  function Cart(){
    this.products = [];
  }

  Object.defineProperty(Cart.prototype, 'total', {
    get: function(){
      var sum =  _.reduce(this.products, function(accumulator, product){
        return accumulator + product.price;
      }, 0);

      return Math.round(sum) || 0;
    }
  });

  Cart.prototype.add = function(product, quantity){
    for(var i = 0; i < quantity; i++){
      this.products.push(product);
    }
  };

  Cart.prototype.remove = function(name, quantity){
    var removed = _.remove(this.products, function(product){
      return product.name === name;
    });

    for(var i = 0; i < quantity; i++){
      removed.pop();
    }

    this.products = this.products.concat(removed);
  };

  return Cart;
})();

