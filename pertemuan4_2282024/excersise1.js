// buatlah fungsi untuk menghitung BMI

let TB = 159 / 100
let BB = 60

function BMI(TB, BB){
    // if (TB > 10){ //digunakan saat ada input user
    //     TB = TB/100
    // }
    let totalTB = TB * TB
    let bmi = BB / totalTB
    console.log("Nilai BMI anda", bmi)

}

// pemanggilan fungsi
BMI(TB, BB);


