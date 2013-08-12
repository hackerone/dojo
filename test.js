var assert = require('chai').assert,
	decimal = require('./decimal').decimal;

describe("test for roman numbers", function(){
	describe("test",function(){
		it("should return 1 when input is I", function(){
			assert.equal(1, decimal('I'));
		});

		it("should return 2 when input is II", function(){
			assert.equal(2, decimal('II'));
		});

		it("should return 3 when input is III", function(){
			assert.equal(3, decimal('III'));
		});

		it("should return 4 when input is IV", function(){
			assert.equal(4, decimal('IV'));
		});

		it("should return 5 when input is V", function(){
			assert.equal(5, decimal('V'));
		});

		it("should return 6 when input VI", function(){
			assert.equal(6, decimal('VI'));
		});

		it("should return 7 when input is VII", function(){
			assert.equal(7, decimal('VII'));
		});
		
		it("should return 9 when input is IX", function(){
			assert.equal(9, decimal('IX'));
		});
		
		it("should return 14 when input is XIV", function(){
			assert.equal(14, decimal('XIV'));
		});
		
		it("should return 22 when input is XXII", function(){
			assert.equal(22, decimal('XXII'));
		});

		it("should return 50 when input in L", function(){
			assert.equal(50, decimal('L'));
		});
	});

});