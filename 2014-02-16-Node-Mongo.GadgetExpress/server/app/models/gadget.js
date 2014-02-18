'use strict';

var Mongo = require('mongodb');
module.exports = Gadget;
var gadgets;

function Gadget(gadget){
  this._id = gadget._id;
  this.name = gadget.name;
  this.price = parseFloat(gadget.price);
  this.amount = parseInt(gadget.amount);
  gadgets = global.mdb.collection('gadgets');
}

Gadget.find = function(_id, fn){
  gadgets = global.mdb.collection('gadgets');
  _id = Mongo.ObjectID(_id);
  gadgets.findOne({_id:_id}, function(err, gadget){
    fn(new Gadget(gadget));
  });
};

Gadget.findAll = function(fn){
  gadgets = global.mdb.collection('gadgets');
  gadgets.find().toArray(function(err, records){
    fn(records);
  });
};

Gadget.prototype.save = function(fn){
  if(this._id){
    var self = this;
    gadgets.update({_id:this._id}, this, function(err, count){
      fn(self);
    });
  }else{
    gadgets.insert(this, function(err, records){
      fn(records[0]);
    });
  }
};

Gadget.prototype.remove = function(amount, fn){
  if(amount < this.amount){
    this.amount -= amount;
    this.save(function(u){
      fn(u.amount);
    });
  }else{
    gadgets.remove({_id:this._id}, function(err, count){
      fn(0);
    });
  }
};

