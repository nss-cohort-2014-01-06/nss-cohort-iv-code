'use strict';

exports.index = function(req, res){
  res.jsonp({ok:true});
};

exports.name = function(req, res){
  res.jsonp({name:'my name is node'});
};

exports.favcolor = function(req, res){
  res.jsonp({color:'blue'});
};

exports.sum = function(req, res){
  var total = parseFloat(req.params.a) + parseFloat(req.params.b);
  res.jsonp({sum:total});
};

exports.candrink = function(req, res){
  var age = parseInt(req.params.age);
  var name = req.params.name;
  var answer;

  if(age < 18){
    answer = 'No';
  } else if(age > 17 && age < 21){
    answer = 'Maybe';
  } else {
    answer = 'Yes';
  }

  var response = 'Can ' + name + ' drink? ' + answer;

  res.jsonp({response:response});
};

