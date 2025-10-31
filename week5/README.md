# Name: MD Muntahi Hossain  
# Student ID: 2874263
My Reflection for week5's learning:

This week was about React JS. 
I created a react js app with the following command.
```bash
npx create-react-app myapp
```
It created myapp directory with node modules folder which includes react ui library.
Gradually, I have created the components according to the lab manual guide. 
It helps me to learn about JSX Elements, Props, Form Handling, Event Handling.
I have also learnt about the differences between Functional and Class Components.
Moreover, I found a bug inside the documentation of week 5 ReactLab.
It was in the AppbackgroundColor.js file.

Wrong
```javascript
document.body.style.background = e.target.value;
```

Corrected
```javascript
document.body.style.backgroundColor = e.target.value;
```
Theere is no property of background inside style object.
It must be backgroundColor

