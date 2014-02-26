'use strict';

var _ = require('lodash');

exports.index = function(req, res){
  var random = _.random(10, 15);
  var names = _.sample(global.flags, random);
  var flags = _.shuffle(names);
  res.render('home/index', {names:names, flags:flags, title:'Flags of the World'});
};

exports.match = function(req, res){
  var code = req.query.code;
  var country = req.query.country;
  var isMatch = _.find(global.flags, function(flag){return flag.country === country && flag.code === code;});
  res.send({isMatch:!!isMatch});
};

