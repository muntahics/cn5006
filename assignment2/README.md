## Name: Md Muntahi Hossain
## Student ID: 2874263

Assignment 2 Completion Process:

Firstly, I created a react app and named it calculator using the command 
```javascript 
npx create-react-app calculator
```
Then I changed my directory inside the calculator folder and ran the ```npm start ``` command.
It visualizes that my react app is successfully installed. Secondly, I created a "Calculator.js" file inside my "calculator/src" directory. Then I copied the code for Calculator.js from moodle. I have done the same for Button.js file. Thirdly, I opened the "calculator/src/index.js" file and imported our "KeyPadComponent" from Calculator.js. I inserted the line at the top of the file.
```javascript
import KeyPadComponent from './Calculator';
```
Finally, I removed the App component and replaced it with our KeyPadComponent.<br>
The code block is replaced 
```javascript
<React.StrictMode>
    <App />
  </React.StrictMode>
```
with this block.
```javascript
  <React.StrictMode>
    <KeyPadComponent />
  </React.StrictMode>
```

After that, I have just refreshed my browser and the calculator app was running.
