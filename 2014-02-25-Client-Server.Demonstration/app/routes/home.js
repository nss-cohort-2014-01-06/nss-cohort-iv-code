'use strict';

var _ = require('lodash');

exports.index = function(req, res){
  res.render('home/index', {title: 'Express Template'});
};

exports.calc = function(req, res){
  res.render('home/calc', {title: 'Calculator'});
};

exports.add = function(req, res){
  var sum = (req.query.x * 1) + (req.query.y * 1);
  res.send({sum:sum});
};

exports.product = function(req, res){
  var numbers = req.query.numbers.split(',');
  var product = _.reduce(numbers, function(acc, x){return acc * x;}, 1);
  res.send({product:product});
};

