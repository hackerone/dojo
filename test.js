var assert = require('chai').assert;

var Glass = function(){
  
  this.volume = 0;

  this.drink = function(){
    this.volume = (this.volume - 1) || 0;
  };

  this.quaff = function(){
    this.volume = (this.volume - 4) || 0;
  };

  this.downInOne = function(){
    this.volume = 0;
  };

};

var makeGlass = function(type){
  var glass = new Glass();
  var volumes = {
    "halfpint" : 10,
    "pint": 20,
    "jug": 60
  };
  glass.volume = volumes[type];
  return glass;
};

describe("test for pint", function(){
  
 it("should be have a volume of 20 fl oz", function(){
  var pint = makeGlass("pint");

  assert.equal(pint.volume, 20);
 });

 it("drink should reduce in volume by 1", function(){
  var pint = makeGlass("pint");

  pint.drink();
  assert.equal(pint.volume, 19);
 });

 it("quaffs should reduce in volume by 4", function(){
  var pint = makeGlass("pint");
  pint.quaff();
  assert.equal(pint.volume, 16);
 });

 it("down-in-one should empty the glass", function(){
  var pint = makeGlass("pint");
  pint.downInOne();
  assert.equal(pint.volume, 0);
 });


});


describe("test for half pint", function(){

 it("should be have a volume of 10 fl oz", function(){
  var halfpint = makeGlass("halfpint");

  assert.equal(halfpint.volume, 10);
 });

 it("drink should reduce in volume by 1", function(){
  var halfpint = makeGlass("halfpint");
  halfpint.drink();
  assert.equal(halfpint.volume, 9);
 });

 it("quaffs should reduce volume of half pint glass by 4", function(){
  var halfpint = makeGlass("halfpint");
  halfpint.quaff();
  assert.equal(halfpint.volume, 6);
 });

 it("down-in-one should empty the half pint glass", function(){
  var halfpint = makeGlass("halfpint");
  halfpint.downInOne();
  assert.equal(halfpint.volume, 0);
 });

});

describe("test for jug", function(){


 it("should be have a volume of 60 fl oz", function(){
  var jug = makeGlass("jug");

  assert.equal(jug.volume, 60);
 });

 it("drink should reduce the volume by 1", function(){
  var jug = makeGlass("jug");

  jug.drink();
  assert.equal(jug.volume, 59);
 });

 it("quaffs should reduce the volume by 4", function(){
  var jug = makeGlass("jug");
  jug.quaff();
  assert.equal(jug.volume, 56);
 });


 it("down-in-one should empty the jug", function(){
  var jug = makeGlass("jug");
  jug.downInOne();
  assert.equal(jug.volume, 0);
 });

});