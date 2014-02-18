/* exported Animal */

var Animal = (function(){

  'use strict';

  function Animal(name, age, gender, photos, description, color, species){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.photos = photos;
    this.description = description;
    this.color = color;
    this.species = species;
  }

  return Animal;
})();

