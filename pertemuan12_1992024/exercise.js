//Ubahlah syntax ES5 berikut ke dalam ES6

//1
function calculateAge(birthYear){
	return 2019 - birthYear;
}

function yearUntilRetirement(object){
	const age = calculateAge(object.year);
	const retirement = 60 - age;

	if(retirement > 0){
    	console.log(`${object.firstName} retires in ${retirement} years`);
	} else {
    	console.log(`${object.firstName} is already retired.`);
	}
}

yearUntilRetirement({year: 1987, firstName: 'John'});


//2.


const addNumber = (a, b, c, d, e, f, g) => {
 	let numbers = [a, b, c, d, e, f, g];
    const sum = numbers.map((num, sum) => num + sum);
    return sum; // Output: [10, 21, 32]
 }

console.log(addNumber(1,2,3,4,5,6,7));

//3.

const phi = 3.14;
const calculateArea = function ({radius, power = 2}) {
  return phi * Math.pow(radius, power);
};
let radius = 21;
let area21 = calculateArea({radius});

radius = 7;
let area7 = calculateArea({radius});
console.log(area with 21 radius: ${area21} and area with 7 radius ${area7});

4.

// 4.
const makeAjaxRequest = (url, method) => {
if(!method){
   	method = 'GET'
}
if(!url){
    method = 'link'
}
console.log(url, method);
}

makeAjaxRequest('www.google.com');