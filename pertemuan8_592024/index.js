//Javascript lopping

let students = [
    {
        id : 1,
        firstName : "Jane",
        grade : 90
    },
    {
        id : 2,
        firstName : "John",
        grade : 80
    },
    {
        id : 3,
        firstName : "Bob",
        grade : 100
    },
];

// // 1. For - loop
// // Array object


// //menampilkna semuanya
// console.log(students);
// //menampilkan satu2
// for(let i=0; i<students.length; i++){
//     console.log[students[i]]
// }


// //2. while
// let i =0;
// while (i < students.length){
//     console.log[students[i]];
//     i++;
// }

// //3. do... while
// let i = 0;
// do {
//     console.log(students[i]);
//     i++;
// } while (i < students.length);


// //BUILD IN METHOD
// //1. froEach()
// students.forEach(function(item, index){
//     console.log(index);
//     console.log(item);
// });

// //2. map() di map bisa membuat array baru
// let output = students.map(function(item){
//     return item;
// });
// console.log(output)

//3.filter melakukan searching
let output = students.filter(function(item){
    return item.grade >= 90
});
console.log(output);

//4.find
let outputFind = students.find(function(item){
    return item.grade >= 90
});
console.log(outputFind);

//5. findIndex
let index = students.findIndex(function(item){
    return item.firstName == "Jane";
});
console.log(index);








