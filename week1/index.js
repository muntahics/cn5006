const prompt = require("prompt-sync")()
console.log("Starting")
const name = prompt("Enter your name: ")
console.log(`Hello, ${name}`)

const number = parseInt(prompt("Enter a number: "))

if(number > 0){
    console.log("The number is positive")
}
else if(number === 0){
    console.log("The number is zero")
}
else{
    console.log("The number is negative")
}