'use strict';

var Mongo = require('mongodb');
module.exports = User;
var users;

function User(user){
  this._id = user._id;
  this.name = user.name;
  this.balance = parseFloat(user.balance);
  this.purchases = user.purchases || [];
  users = global.mdb.collection('users');
}

User.find = function(_id, fn){
  users = global.mdb.collection('users');
  _id = Mongo.ObjectID(_id);
  users.findOne({_id:_id}, function(err, user){
    fn(new User(user));
  });
};

User.findAll = function(fn){
  users = global.mdb.collection('users');
  users.find().toArray(function(err, records){
    fn(records);
  });
};

User.prototype.save = function(fn){
  if(this._id){
    var self = this;
    users.update({_id:this._id}, this, function(err, count){
      fn(self);
    });
  }else{
    users.insert(this, function(err, records){
      fn(records[0]);
    });
  }
};

User.prototype.purchase = function(gadget, amount, fn){
  var total = gadget.price * amount;
  if((amount <= gadget.amount) && (total <= this.balance)){
    var self = this;
    gadget.remove(amount, function(remaining){
      self.balance -= total;
      for(var i = 0; i < amount; i++){
        self.purchases.push(gadget.name);
      }
      self.save(function(u){
        fn(u, gadget._id, remaining);
      });
    });
  }
};

