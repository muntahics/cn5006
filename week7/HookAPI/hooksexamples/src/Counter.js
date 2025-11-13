import React from "react";
import "./App.css";
import { useState } from 'react';

export default function Hook_ControlledButtonState(){
    const [count, setCount] = useState(0)
    const ClickHandle = () => {
         setCount(count + 1);
        };
    return(
        <div className="App-header">
            <form>
                4
                UEL: CN5006 React Functional Component using Hook Prepared by: Dr N.Qazi
                <h1>Click Counts are {count}</h1>
                <button type="button" onClick={ClickHandle}>Click me{count}</button>
            </form>
        </div>
    )
}