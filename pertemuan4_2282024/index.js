// Javascript Function

// // 1. Function Declaration
// // Fungsi yang berdiri sendii

// function greetings1(){
//     // Funtion Initialization
//     console.log("Hello World");
// }

// greetings1(); // Function call or Function execute

// // 2. Function Declaration

// let greetings2 = function (){
//     console.log("Hello World");
// };
// greetings2()

// Parameter & Argumen



// // cara 1
// //                 parameter
// function greetings1(fullName){
//     return "Hello World" + " " + fullName;
// }
// //                      argumen
// let output1 = greetings1("Jane Doe")
// console.log(output1);


// // cara 2
// let greetings2 = funtion (fullName){
//     return "Hello World" + " " + fullName;
// };
// //                      argumen
// let output = greetings2("Jane Doe")
// console.log(output);

//Global scope & local scope (Function & block)

let x = 10; //global scope
function foo(){
    let y = 20; //local scope
    console.log(y)
    console.log(x)
    if (x < y){//semua yg dalam kurung kurawal diesbut block
        let z = 30;
        console.log(z);

    }
    // console.log(z) -> Error
}

// console.log(y) -> ERROR
// console.log(x) -> 10

foo();

