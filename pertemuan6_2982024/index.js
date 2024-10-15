//Javascript Array

//Deklarasi Array

// //1. Array Literal
// let numbers = [1, 2, 3, 4, 5]; // data di dalam adalah elemen
// console.log(numbers);
// //2. Kata kunci new
// let numbers2 = new [1, 2, 3, 4, 5]; // data di dalam adalah elemen
// console.log(numbers2);


// //Tipe data dalam Array
// let numbers = [1, 2, 3, 4, 5]; //number
// let student = ["Meeti", "Oyen", "Eki"]; //string
// let jane = ["Bob", 1, 45, true, [80, 90, 304]]; //mixed

// console.log(jane);

// //Array length
// console.log(numbers.length)
// console.log(student.length)
// console.log(jane.length)

// //Array index
// console.log(numbers[1])
// console.log(student[0])
// console.log(jane[4][0])


// //Mengakses elemen terakhir dalam data
// let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(numbers3[numbers3.length-1])


//Array method, array itu kan class
let array = [1, 2, 3, "hallo", false, true]
console.log(array)
//1. toString()
console.log(array.toString());

//2. join()
console.log(array.join());
console.log(array.join(" "));
console.log(array.join("-"));

//3. pop()
array.pop(); //hapus index terakhir

console.log(array)
//4. push()
array.push("Selamat Pagi");
console.log(array) //tambah index terakhir

//5. shift() 
array.shift("Selamat Pagi");
console.log(array) //hapus index pertama

//6. unshift() 
array.unshift("Selamat Pagi");
console.log(array) //tambah index pertama

//7. splice() 
array.splice(3, 1);
console.log(array) //hapus index ke 3
array.splice(3, 0, 4, 5);
console.log(array) //tmbah 4, 5 di index ke 3

//8. concat()
let buah = ["pisang", "apel", "jeruk"]
let sayur = ["wortel", "tomat", "bayam"]
let biji = ["kedelai", "kacang tanah", "kacang polong"]
let makanan = buah.concat(sayur)
console.log(makanan)
let makanan2 = buah.concat(sayur, biji)
console.log(makanan)

//9. slice()
let sayuran = makanan.slice(3, 6)
console.log(makanan)
let bijian = makanan.slice(6)
console.log(bijian)

