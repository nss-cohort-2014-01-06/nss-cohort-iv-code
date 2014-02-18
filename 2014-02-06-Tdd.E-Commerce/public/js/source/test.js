/* global test:false, ok:false, Product:false, Person:false, Cart:false, deepEqual:false */

'use strict';

test('Product#new', function(){
  var p1 = new Product('Banana', 5);

  ok(p1 instanceof Product, 'p1 is a product');
  deepEqual(p1.name, 'Banana', 'p1 has a name');
  deepEqual(p1.price, 5, 'p1 has a price');
});

test('Person#new', function(){
  var r1 = new Person('Bob', 500);

  ok(r1 instanceof Person, 'r1 is a person');
  deepEqual(r1.name, 'Bob', 'r1 has a name');
  deepEqual(r1.cash, 500, 'r1 has cash');
  ok(r1.cart instanceof Cart, 'r1 cart is a Cart');
  ok(r1.cart.products.length === 0, 'r1 has no products');
  ok(r1.cart.total === 0, 'r1 owes nothing');
});

test('Person#checkOut', function(){
  var r1 = new Person('Bob', 500);
  var p1 = new Product('Banana', 5.50);
  var p2 = new Product('Tomato', 3.30);

  r1.cart.add(p1, 2);
  r1.cart.add(p2, 3);
  var receipt = r1.checkOut();

  deepEqual(r1.cash, 479, 'less cash');
  deepEqual(r1.cart.total, 0, 'nothing in cart');
  deepEqual(receipt, 'Banana, Banana, Tomato, Tomato, Tomato', 'my receipt');
});

test('Cart#new', function(){
  var c1 = new Cart();

  ok(c1 instanceof Cart, 'c1 is a Cart');
  ok(c1.products.length === 0, 'c1 has no products');
  ok(c1.total === 0, 'c1 has 0 total');
});

test('Cart#add', function(){
  var r1 = new Person('Bob', 500);
  var p1 = new Product('Banana', 5.50);
  var p2 = new Product('Tomato', 3.30);

  r1.cart.add(p1, 2);
  r1.cart.add(p2, 3);

  deepEqual(r1.cart.total, 21, 'cart total');
  deepEqual(r1.cart.products.length, 5, '5 items in cart');
});

test('Cart#remove', function(){
  var r1 = new Person('Bob', 500);
  var p1 = new Product('Banana', 5.50);
  var p2 = new Product('Tomato', 3.30);

  r1.cart.add(p1, 2);
  r1.cart.add(p2, 3);
  r1.cart.remove('Tomato', 1);

  deepEqual(r1.cart.total, 18, 'cart total');
  deepEqual(r1.cart.products.length, 4, '4 items in cart');
});

