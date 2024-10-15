//Fetch

// Buatlah sebuah function bernama ambilDataUser()

// Gunakan fetch() untuk mengambil data dari end-point API berikut "https://reqres.in/api/users” 

// Gunakan promise untuk melakukan fetch(). Tambahkan .then() di bawah kode fetch().
//Isi parameter .then() berupa callback function yang memiliki argumen bernama response.
//Di dalamnya lakukan return terhadap response dan gunakan method .json()

// Tambahkan .then() yang kedua di bawah kode then() yang pertama. 
//Isi parameter .then() berupa callback function yang memiliki argumen bernama users. 
//Di dalamnya lakukan console.log() terhadap variabel users. 
//(note: yg tampilkan key ‘data “first_name, last_name”)

// Panggil function ambilDataUser() di luar blok kode function ambilDataUser. 
//Cek pada tab Console untuk melihat data.

// let condition = true;
// const newPromise = new Promise((resolve, reject) => {
//   if (condition) {
//     resolve("https://reqres.in/api/users");
//   } else {
//     reject("Gagal");
//   }
// });

const ambilDataUser = () => {
    fetch("https://reqres.in/api/users")
    .then((response) => response.json())
    .then(({data}) => {
        data.forEach(({first_name, last_name}) => {
            console.log(`First Name: ${first_name}, Last Name: ${last_name}`)
        })
    })
    .catch((error) => console.log(error)); 
};

ambilDataUser();





