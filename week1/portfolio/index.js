const prompt = require("prompt-sync")()

const num1 = parseInt(prompt("Enter your first number: "))
const num2 = parseInt(prompt("Enter your second number: "))
const method = prompt("Enter your operation: ")

switch (method) {
    case '+': console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);break;
    case '-': console.log(`The difference of ${num1} and ${num2} is ${num1 - num2}`);break;
    case '/': console.log(`The division of ${num1} and ${num2} is ${num1 / num2}`);break;
    case '*': console.log(`The multiplication of ${num1} and ${num2} is ${num1 * num2}`);break;
    default: console.log(`Please enter an operation from these four +,-,/,*`); 
}

