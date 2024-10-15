//1

const calculateAge = (birthYear) => 2019 - birthYear;

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


//2

const addNumber = (a, b, c, d, e, f, g) => {
    let numbers = [a, b, c, d, e, f, g];
    let sum = 0;
    //gunakan map
    numbers.map((item) => (sum += item));
   return sum; // Output: [10, 21, 32]
}

console.log(addNumber(1,2,3,4,5,6,7));

//3





