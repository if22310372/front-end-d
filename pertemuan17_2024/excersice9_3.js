//async await

//Ubahlah fungsi ambilDataUser( ) yang sudah dikerjakan di nomor 2 dengan menggunakan Async Await

// const ambilDataUser = () => {
//     fetch("https://reqres.in/api/users")
//     .then((response) => response.json())
//     .then(({data}) => {
//         data.forEach(({first_name, last_name}) => {
//             console.log(`First Name: ${first_name}, Last Name: ${last_name}`)
//         })
//     })
//     .catch((error) => console.log(error)); 
// };

const ambilDataUser = async () => {
    try {
        const response = await fetch("https://reqres.in/api/users") 
        const {data} = await response.json()
        data.forEach(({first_name, last_name}) => {
            console.log(`First Name: ${first_name}, Last Name: ${last_name}`)
        })
    }catch(error){
        console.error("error")
    }
}

ambilDataUser()