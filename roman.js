
var singleRoman = function(input){
	if(input.length == 1){


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
	}
};

var roman = function(input){


	var chars = input.split(''); // III -> ['I', 'I',]
	var sum = 0;


	for(i = 0; i < chars.length; i++){
			if(typeof(chars[i-1]) !== 'undefined' && singleRoman(chars[i-1]) < singleRoman(chars[i])){
				sum += (singleRoman(chars[i]) - 2*singleRoman(chars[i-1])); 

			}else{
				sum += singleRoman(chars[i]);
			}
		
	}

	return sum;

};

exports.roman = roman;