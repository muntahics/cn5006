import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import Hook_ControlledButtonState from './Counter';
import MyMoodWaetherWidget from './MyMoodWeather';


import EmojiCounter from './EmojiCounter';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hook_ControlledButtonState/>
    <EmojiCounter pic='Love'/>
    <EmojiCounter pic='Sad'/>
    <EmojiCounter pic='Like'/>
    <MyMoodWaetherWidget pic='Sunny'/>
    <MyMoodWaetherWidget pic='Rainy'/>
    <MyMoodWaetherWidget pic='Cloudy'/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

