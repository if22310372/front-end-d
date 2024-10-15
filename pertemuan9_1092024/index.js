//Array Excersize

let people = ["Greg", "Mary", "Devon", "James"]
console.log(people)

//1. using for-loop iterate through this array and console.log all of the people
for(let i=0; i<people.length; i++){
    console.log(people[i])
}

//2. using forEach() iterate through this array and console.log all of the people
people.forEach(function(item){
    console.log(item)
})

//3. write the command to remove "Greg" from array
people.shift();
console.log(people)

//4. write the command to remove "James" from array
people.pop();
console.log(people)

//5. write the command to add "Matt" front of array
people.unshift("Matt")
console.log(people)

//6. write the command to add "Your name" front of array
people.push("Lana")
console.log(people)

//7. Break
for(let i=0; i<people.length; i++){
    console.log(people[i])
    if(people[i]=="Mary"){
        break
    }
}
console.log("You have exited loop")

//8.
let copy = people.slice(2)
console.log(copy)

//9.
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people)

//10
let withBob = people.concat("Bob")
console.log(withBob)


//Object Excersice
let programming = {
    language : ["Javascript", "Python", "Ruby"],
    isChallenging : true,
    isRewarding : true,
    difficulty : 8,
    jokes : "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
}

//1
programming.language.push("Go")
console.log(programming)

programming.difficulty = 7
console.log(programming)

delete programming.jokes
console.log(programming)

programming.isFun = true
console.log(programming)


programming.language = programming.language.map((language, index) => `${index} - ${language}`);
console.log(programming);






