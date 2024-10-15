let lana = {
    firstName : "Lana Londah",
    weight : 63,
    height : 159 / 100,
    calculateBMI : function(){
        total = this.weight / (this.height * this.height)
        console.log("Your BMI is", total)
        if (total < 16.0){
            console.log(this.firstName + " is severely Underweight")
        }
        else if (total >= 16 && total < 18.5){
            console.log(this.firstName + " is Underweight")
        }
        else if (total >= 18.5 && total < 25.0){
            console.log(this.firstName + " is normal")
        }
        else if (total >= 25.0 && total < 30.0){
            console.log(this.firstName + " is overweight")
        }
        else if (total >= 30.0 && total < 35.0){
            console.log(this.firstName + " is moderately obese")
        }
        else if (total >= 35.0 && total < 40.0){
            console.log(this.firstName + " is severely obese")
        }
        else {
            console.log(this.firstName + " is morbidly obses")
        }
    }
}

lana.calculateBMI();
