# Name: MD Muntahi Hossain  
# Student ID: 2874263
<br>
My Reflection for week1's learning:

This week was more about introduction though I have learned about the web histroy. 
Besides, the difference between MERN and MEAN which is respectively Mongo DB, Express JS, React JS or Angular JS, and Node JS.
I have also learned how to install MERN in my system and how to run it on cloud via Github. The visual studio code is one of the most impressive IDE for coding. I also found the lecturers helpful during lectures and practical sessions.

The Node JS excersies were interesting and I liked the way of coding it via Github. 
The npm package prompt-sync was helpful for prompting users about the input. 
The parseInt() function helped the string to transform into a number.
Accordingly, I understand the way of coding in javascript with node js. 
However, I am eagerly waiting to join the next class to learn more about Mongo DB.


# Week1 Portfolio Exercise
```javascript
const prompt = require("prompt-sync")()

const num1 = parseInt(prompt("Enter your first number: "))
const num2 = parseInt(prompt("Enter your second number: "))
const method = prompt("Enter your method: ")

switch (method) {
    case '+': console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);break;
    case '-': console.log(`The difference of ${num1} and ${num2} is ${num1 - num2}`);break;
    case '/': console.log(`The division of ${num1} and ${num2} is ${num1 / num2}`);break;
    case '*': console.log(`The multiplication of ${num1} and ${num2} is ${num1 * num2}`);break;
    default: console.log(`Please enter a method from these four +,-,/,*`); 
}
```

