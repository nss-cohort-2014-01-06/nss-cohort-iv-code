'use strict';

module.exports = Priority;

function Priority(priority){
  this.name = priority.name;
  this.value = parseInt(priority.value);
}

