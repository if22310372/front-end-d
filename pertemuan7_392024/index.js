//Javascript object & conditional
//Deklarasi object

//object literal
let john = {
    firstName: "John", //properti value
    age: 30,
    isMarried: true,
    grade: [90, 80, 100],
    saygreetings: function(){
        console.log("hello mu name is" + this.firstName); // this mengacu pada object itu sendiri, di python self
    },
    adress: {
        street: "Jl. Arnold mononutu",
        city: "minahasa utara",
        province: "sulut",
        postalcode: 95371,
    },
};
console.log(john);

//Mengakses properti dalam object
//1. Dot Notation
console.log(john.firstName) //john
console.log(john.age) //30
john.age = 31 //mengubah nilai
console.log(john)
john.job = "Teacher" //properti yang tidak ada akan ditambahkan
console.log(john)
//2. bracket notation
console.log(john["isMarried"]);
john["nationality"] = "Indonesia"; //tambah properti baru

//object method
john.saygreetings();

//object inside object
console.log(john.adress.city)

//delete property
delete john.grade;
console.log(john)



//javascript conditional
//1. if else
//jika temperatur > 37 tampilkan cuaca panas
//sebaliknya jika teperatur di bawah 37 tampilkan cuaca dingin

temp = 37
if (temp >= 37){
    console.log("Cuaca hari ini panas")
} else{
    console.log("Cuaca hari ini dingin")
}


//2. if - else if - else
nilai = 76
if (nilai >= 80 && nilai <=100 ){
    console.log("Grade A")
} 
else if(nilai >= 70 && nilai < 80){
    console.log("Grade B")
}
else if(nilai >= 50 && nilai < 70){
    console.log("Grade C")
}
else{
    console.log("Grade D")
}

//3. switch case
let month = 12;
switch (month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    default:
        console.log("not found");
        break;
}






