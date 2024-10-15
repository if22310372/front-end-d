//axios
//Ubahlah yang sudah dikerjakan di nomor 3 dengan menggunakan Axios

const ambilDataUser = async () => {
    try {
        const response = await axios.get("https://reqres.in/api/users") 
        const {data} = await response.data
        data.forEach(({first_name, last_name}) => {
            console.log(`First Name: ${first_name}, Last Name: ${last_name}`)
        })
    }catch(error){
        console.error(error)
    }
}

ambilDataUser();