/* global Animal: false */
/* exported animalFactory */

var animalFactory = (function(){

  'use strict';

  function animalFactory(){
    var animals = [];
    var animal;
    var photos;

    photos = [];
    photos[0] = 'url(http://www.myhoundhaven.org/images/Golden%20Retriever.jpg)';
    photos[1] = 'url(http://www.ryanseacrest.com/wp-content/uploads/2012/08/Boo-The-Dog.jpg)';
    animal = new Animal('Fido', 3, 'Male', photos, 'Happy Dog', 'Brown', 'Dog');
    animals.push(animal);

    photos = [];
    photos[0] = 'url(http://nols.blogs.com/.a/6a00d83451b4f069e20133f2f419c8970b-pi)';
    animal = new Animal('Smokey', 7, 'Male', photos, 'Friendly', 'Brown', 'Bear');
    animals.push(animal);

    photos = [];
    photos[0] = 'url(https://lh3.googleusercontent.com/-jtwtX9VfJqE/UE9v7N6DwhI/AAAAAAAAAAw/Yx_GIG-Boes/w800-h800/hello-kitty.png)';
    animal = new Animal('Fluffy', 2, 'Female', photos, 'Kitty', 'Light Brown', 'Cat');
    animals.push(animal);

    photos = [];
    photos[0] = 'url(https://lh5.googleusercontent.com/-6TV4wvNoPE4/UWTDfxuVAnI/AAAAAAAAARA/-tY9wMy9XyA/s630-fcrop64%3D1,0000439ffffff918/3d_animals_-_Snake.jpg)';
    animal = new Animal('Hissy', 1, 'Female', photos, 'Scary', 'Green', 'Snake');
    animals.push(animal);

    photos = [];
    photos[0] = 'url(http://static2.wikia.nocookie.net/__cb20131104011256/trollpasta/images/3/34/Bee.jpg)';
    animal = new Animal('Buzz', 2, 'Female', photos, 'Stingy', 'Brown', 'Bee');
    animals.push(animal);

    photos = [];
    photos[0] = 'url(http://www.walrus.org.uk/walrus.jpg)';
    animal = new Animal('Wally', 5, 'Male', photos, 'Flabby', 'Brown', 'Walrus');
    animals.push(animal);

    photos = [];
    photos[0] = 'url(http://www.funnyvooz.com/wp-content/uploads/2012/09/funny_animals_catsmob_com_20120309_00467_030.jpg)';
    animal = new Animal('Sally', 3, 'Female', photos, 'Crazy', 'White', 'Dog');
    animals.push(animal);

    return animals;
  }

  return animalFactory;
})();

