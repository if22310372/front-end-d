//Destructuring

//1. Array & Objek
//Array
let film = ["Harry Potter", "Narnia", "Home Alone", "Peter Pan"]

let [film1, film2, film3, film4] = film;

console.log(film1);
console.log(film2);
console.log(film3);
console.log(film4);

//Objek
let aktor = {
    nama : "Helena Bonham Carter",
    umur : 58,
    pekerjaan : "Aktris",
    asal : "London"
}

let {nama, umur, pekerjaan, asal} = aktor;

console.log(nama);
console.log(umur);
console.log(pekerjaan);
console.log(asal);

//2. Sebagian
let [film11, film12, , film14] = film;

console.log(film11);
console.log(film12);
console.log(film14);

let {nama1, umur1, pekerjaan1} = aktor;
console.log(nama);
console.log(umur);
console.log(pekerjaan);

//3. Default parameter
function blog(name0 = nama, film0 = film1){
    return `${name0} berperan dalam film ${film0}`
}

console.log(blog("Lana", film1))
console.log(blog())

//4. Rest parameter
let [filmterbaik1, filmterbaik2, ...rest] = film;
console.log(filmterbaik1)
console.log(filmterbaik2)
console.log(rest)

let aktor2 = {
    nama2 : "Helena Bonham Carter",
    umur2 : 58,
    pekerjaan2 : "Aktris",
    asal2 : "London"
}
let {nama2, umur2, ...sisa} = aktor2;
console.log(nama2)
console.log(umur2)
console.log(sisa)