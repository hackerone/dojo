
var singleDecimal = function(input){

		switch(input){
			case 'I':
				return 1;
			case 'V':
				return 5;
			case 'X':
				return 10;
			case 'L':
				return 50;
			case 'C':
				return 100;
			case 'D':
				return 500;
			case 'M':
				return 1000;
		}
};



var decimal = function(input){

	var chars = input.split(''); // III -> ['I', 'I', 'I']
	var sum = 0;

	for(i = 0; i < chars.length; i++){
			if( (i+1 < chars.length) && singleDecimal(chars[i+1]) > singleDecimal(chars[i])){
				sum -= singleDecimal(chars[i]);
			}else{
				sum += singleDecimal(chars[i]);
			}
	}
	return sum;
};


exports.decimal = decimal;