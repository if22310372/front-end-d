//Asynchronous JavaScript


//Synchronous -> single thread -> blocking
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses 3");
// console.log("Proses 4");
// console.log("Proses 5");

//Asynchronous -> multhithread -> non blocking
//1. Pararel 
// menerima callback dan waktu milisecond
setTimeout(() => {
    console.log("Proses 1")
}, 3000)
setTimeout(() => {
    console.log("Proses 2")
}, 3000)


//2. Concurrent
//callback hell
// setTimeout(() => {
//     console.log("Proses 3")
//     setTimeout(() => {
//         console.log("Proses 4")
//         setTimeout(() => {
//             console.log("Proses 5")
//         }, 3000)
//     }, 3000)
// }, 3000)

//Promise








let newPromise = new Promise((resolve, reject) => {
    if (true) {
      // apa yang dilakukan jika promise fulfilled
      resolve("Berhasil");
    } else {
      // apa yang dilakukan jika promise rejected
      reject("Gagal");
    }
  });
  

//1. Fetch
fetch("https://jsonplaceholder.typicode.com/users")
 .then((response) => response.json())
 .then((json) => console.log(json))

const consumePromise = async () => {
    let result = await new Promise;
    console.log(result)

}
consumePromise();


