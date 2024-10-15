//1. String Literal

let fullName = "Jane Doe";
let age = 30;
let address = "Manado";

// Halo nama saya Jane Doe, umur saya 30 tahun
// dan saya tinggal di Manado

let kalimat1 = "Halo nama saya " + fullName + ", umur saya " + age + "tahun"
console.log(kalimat1);

let kalimat2 = `Halo nama saya ${fullName}, umur saya ${age} tahun dan saya tinggal di ${address}`
console.log(kalimat2);


//2. Arrow function (lebih cocok pada anonyymous function)
function sayGreetings1(fullName){
    return `Hello my name is ${fullName}`;
}
console.log(sayGreetings1("Jane Doe"))


const sayGreetings2 = () => {
    return `Hello my name is ${fullName}`
}
console.log(sayGreetings2("Jane Doe"))

//IMPLICIT RETURN VALUE
const sayGreetings3 = () => `Hello my name is ${fullName}`



//Arrow function pada IIFE
let output1 = (() => "Hello World")();


//Arrow function pada callback
let numbers = [1, 2, 3, 4, 5];
let output2 = number.map((item) => item);
console.log(output2);

//3. Default Parameter
const sayGreetings4 = (fullName = "Jane Doe", age = 30, address = "Manado"){
    console.log(
        `Halo nama saya ${fullName}, umur saya ${age}, saya tinggal di ${address}`
    );
};