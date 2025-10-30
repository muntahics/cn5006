import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GreetingElement from './myGreetingApp';
import reportWebVitals from './reportWebVitals';
import GreetingElementWithProp from './mygreetingprop';
import AppColor from './AppbackgroundColor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppColor heading="This is first element" lbl="Name :" color="green"/>
    <AppColor heading="This is second element" lbl="Name :" color="blue"/>
    <AppColor heading="This is third element" lbl="Name :" color="yellow"/>
    <GreetingElement />
    <GreetingElementWithProp msg="Monday" />
    <GreetingElementWithProp msg="Tuesday" />
    <GreetingElementWithProp msg="Wednesday" />
    <GreetingElementWithProp msg="Thursday" />
    <GreetingElementWithProp msg="Friday" />
    <GreetingElementWithProp msg="Saturday" />
    <GreetingElementWithProp msg="Sunday" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
