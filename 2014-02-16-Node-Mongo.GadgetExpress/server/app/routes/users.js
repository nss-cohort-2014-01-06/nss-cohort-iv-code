'use strict';

var User = require('../models/user');
var Gadget = require('../models/gadget');

exports.index = function(req, res){
  User.findAll(function(users){
    res.send({users:users});
  });
};

exports.create = function(req, res){
  var user = new User(req.body);
  user.save(function(u){
    res.send(u);
  });
};

exports.purchase = function(req, res){
  User.find(req.body.userId, function(user){
    Gadget.find(req.body.gadgetId, function(gadget){
      user.purchase(gadget, parseInt(req.body.amount), function(u, g, r){
        res.send({user:u, gadgetId:g, remaining:r});
      });
    });
  });
};

