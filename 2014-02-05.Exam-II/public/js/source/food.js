/* exported Food */

var Food = (function(){
  'use strict';

  function Food(name, calsPerServ){
    this.name = name;
    this.caloriesPerServing = calsPerServ;
  }

  return Food;
})();

