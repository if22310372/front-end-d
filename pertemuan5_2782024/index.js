//IIFE and Callback
//1. IIFE (Immidietly invoked function expression) 
//fungsi yang dipanggil secara langsung, langsung terpanggil


(function (){
    console.log("Hello World")
})();
// no parameter & argumen & return value
// () paling bawah, self excecuting
//function yang tidak memiliki nama, anonymous function




// with parameter & argumen & return value
let output = (function (fullName){
    return "Hello " + fullName;
})("Jane Doe");
// () paling bawah, menaruh argumen
// return dari IIIFE ada di Variabel output

console.log(output);



// 2. callback function
// no parameter & argumen & return value
function sayHello(callback){
    callback();
}

sayHello(function (){
    console.log("Apakabar");
})

// argumen yang diberikan adalah anonymous functtion


// with parameter & argumen & return value

function sayHello(callback){
    let output = callback();
}

sayHello(function (){
    return "Hello ma men";
})



























