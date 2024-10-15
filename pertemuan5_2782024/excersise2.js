//ubah ex 1 BMI

//IIFE
(function (){
    let tb = 156 /100
    let bb = 60
    let totalBMI = bb / (tb*tb)
    console.log("BMI anda", totalBMI)
})();


//Callback


function BMIcount(callback){
    let tb = 156/100
    let totaltb = tb*tb
    let bb = 60
    callback(bb, totaltb);

}

BMIcount(function(bb, tb){
    let BMI = bb / tb
    console.log("Total BMI anda", BMI)

})