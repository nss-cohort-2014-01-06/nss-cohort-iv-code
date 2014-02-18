'use strict';

var expect = require('chai').expect;
var Priority = require('../../app/models/priority');

describe('Priority', function(){

  describe('new', function(){
    it('should create a new Priority', function(){
      var obj = {name:'High', value: '10'};
      var p1 = new Priority(obj);

      expect(p1).to.be.instanceof(Priority);
      expect(p1).to.have.property('name').and.equal('High');
      expect(p1).to.have.property('value').and.deep.equal(10);
    });
  });

});

