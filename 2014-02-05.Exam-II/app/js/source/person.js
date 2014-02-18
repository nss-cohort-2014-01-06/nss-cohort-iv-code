/* exported Person */

var Person = (function(){
  'use strict';

  function Person(name, gender, age, weight){
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.weight = weight;
    this.foods = [];
  }

  Object.defineProperty(Person.prototype, 'crazyString', {
    get: function(){
      var foods = _.uniq(this.foods).reverse();
      var words = _.map(foods, function(food){
        return food.name.length % 2 === 0 ? food.name.toLowerCase() : food.name.toUpperCase();
      });

      return words.join('--');
    }
  });

  Person.prototype.eat = function(food, servings){
    this.foods.push(food);
    var calories = food.caloriesPerServing * servings;
    var pounds = calories / 3500;
    this.weight += Math.round(pounds);
  };

  Person.prototype.exercise = function(type, minutes){
    var burnRate;
    switch(type){
      case 'Swim':
        burnRate = this.gender === 'Male' ? 900 : 700;
        break;
      case 'Run':
        burnRate = this.gender === 'Male' ? 700 : 500;
    }

    var calories = burnRate * (minutes/60);
    var pounds = calories/3500;
    this.weight -= Math.round(pounds);
  };

  return Person;
})();

