//1
const calculateAge = birthYear => 2019 - birthYear;

const yearUntilRetirement = ({year, firstName}) => {
    let age = calculateAge(year);
    let retirement = 60 - age;

    if (retirement > 0){
        console.log(`${firstName} retires in ${retirement} year`)
    } else {
        console.log(`${firstName} is already retired.`)
    }
};


//2
const addNumber = ({...numbers}) => {
    let sum = 0;
    for (let num of numbers) {
      sum += num;
    }
    return sum;
  }

//3
let phi = 3.14;
let power = 2;
let radius = 0;

const calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);

radius = 21;
let area21 = calculateArea({ radius: radius, power: 2 });

radius = 7;
let area7 = calculateArea({ radius: radius, power: 2 });

const output = () => {
    console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);
}

//4
const makeAjaxRequest = (url, method) => {
    if (!method) {
        method = "GET"
    }
    console.log(url, method)
};

export {yearUntilRetirement, addNumber, output, makeAjaxRequest};