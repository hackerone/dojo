var assert = require('chai').assert;

describe("test", function(){
	describe("#index",function(){
		it('should return 1', function(){
			assert.equal(1, [1,2,3].indexOf(3));
		});
	});
});