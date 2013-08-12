var assert = require('chai').assert,
	roman = require('./roman').roman;

describe("test for roman numbers", function(){
	describe("test",function(){
		it("should return 1 when input is I", function(){
			assert.equal(1, roman('I'));
		});

		it("should return 2 when input is II", function(){
			assert.equal(2, roman('II'));
		});

		it("should return 3 when input is III", function(){
			assert.equal(3, roman('III'));
		});

		it("should return 4 when input is IV", function(){
			assert.equal(4, roman('IV'));
		});

		it("should return 5 when input is V", function(){
			assert.equal(5, roman('V'));
		});

		it("should return 6 when input VI", function(){
			assert.equal(6, roman('VI'));
		});

		it("should return 7 when input is VII", function(){
			assert.equal(7, roman('VII'));
		});
		
		it("should return 9 when input is IX", function(){
			assert.equal(9, roman('IX'));
		});
		
		it("should return 14 when input is XIV", function(){
			assert.equal(14, roman('XIV'));
		});
		
		it("should return 22 when input is XXII", function(){
			assert.equal(22, roman('XXII'));
		});

		it("should return 50 when input in L", function(){
			assert.equal(50, roman('L'));
		});
	});

});