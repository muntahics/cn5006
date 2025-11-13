import Sunny from "./sunny.png";
import Rainy from "./rainy.png";
import Cloudy from "./cloudy.png";
import { useState, useEffect } from "react";

export default function MyMoodWaetherWidget(props){
    console.log("pic is ",props.pic)
    
        const [pic, setPic] = useState(Sunny);
        const [count, setCount] = useState(0);
    
        const ClickHandle = () => {
            setCount(count + 1);
        };

         useEffect(() => {
                console.log ("function called",props.pic)
                if (props.pic === "Sunny") {
                    setPic(Sunny);
                } else if (props.pic === "Rainy") {
                    setPic(Rainy);
                } else if (props.pic === "Cloudy") {
                    setPic(Cloudy);
                }
        }, [props.pic]);

         return (
            <div className="App">
                <p>{props.pic} <span></span>
                    <button onClick={ClickHandle}>{count }
                        <img src={pic} alt={props.pic} width="60px"/>
                    </button>
                </p>
            </div>
        )

}