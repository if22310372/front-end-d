//Rest parameter & spread operator

//1. rest parameter
//digunakan pada saat kita membuat fungsi 
//yang memiliki banyak parameter

//fungsi tanpa rest parameter
const func1 = (param1, param2, param3, param4, param5) =>{
    console.log(param1, param2, param3, param4, param5)
};

func1("A", "B", "C", "D", "E");

//fungsi dengan rest parameter
const func2 = (...params) => { //params bertipe array, nama terserah
    console.log(params);
};
func2("A", "B", "C", "D", "E");


//rest parameter harus berada di terkahir dalam parametger
const func3 = (param1, param2, ...params) => { //params bertipe array, nama terserah
    console.log(param1);
    console.log(param2);
    console.log(params);
};
func3("A", "B", "C", "D", "E");

//mini excersise
const penjumlahan = (...params) => {
    let hasil = 0;
    params.forEach((item) => (hasil += item))
    return hasil;

};
console.log(penjumlahan(1, 2, 3, 4, 5, 6));

//2. Spread operator
//digunakan pada array dan object untuk memecah array/object
//menjadi elemen-elemen kecil pembentuknyal

let numbers = [1, 2, 3, 4, 5];
console.log(numbers)
console.log(...numbers)

//2.1. duplikasi array
let numbers2 = [...numbers]
console.log(numbers2)


//2.2 menggabungkan array
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [7, 8, 9]

let number4 = arr1.concat(arr2, arr3); //ES5
let number5 = [...arr1, ...arr2, ...arr3]; //ES6

const jane = {
    fullName : "Jane Doe",
    age : 30,
};

//2.3 duplikasi objek
const jane2 = {...jane, address: "Manado"}
console.log(jane2)

//2.4 menggabungkan objek
let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, d: 4};
let obj3 = {e: 5, f: 6};

let combineObj = {...obj1, ...obj2, ...obj3}
console.log(combineObj)