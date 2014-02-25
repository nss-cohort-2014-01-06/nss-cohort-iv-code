'use strict';

var _ = require('lodash');

exports.index = function(req, res){
  var random = _.random(2, 4);
  var flags = _.sample(global.flags, random);
  res.render('home/index', {flags:flags, title:'Flags of the World'});
};

