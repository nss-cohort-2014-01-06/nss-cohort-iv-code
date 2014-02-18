'use strict';

var Gadget = require('../models/gadget');

exports.index = function(req, res){
  Gadget.findAll(function(gadgets){
    res.send({gadgets:gadgets});
  });
};

exports.create = function(req, res){
  var gadget = new Gadget(req.body);
  gadget.save(function(g){
    res.send(g);
  });
};

