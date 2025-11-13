import Love from "./Love.png";
import Like from "./like.png";
// import Happy from "./happy.png";
import Sad from "./sad.png";
import { useState, useEffect } from "react";

const style = {
    
} 

export default function EmojiCounter(props){
    console.log("pic is ",props.pic)

    const [pic, setPic] = useState(Love);
    const [count, setCount] = useState(0);

    const ClickHandle = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        console.log ("function called",props.pic)
        if (props.pic === "Love") {
            setPic(Love);
        } else if (props.pic === "Like") {
            setPic(Like);
        } else if (props.pic === "Sad") {
            setPic(Sad);
        }
    }, [props.pic]);

    return (
        <div className="App">
            <p>{props.pic} <span></span>
                <button onClick={ClickHandle}>{count }
                    <img src={pic} alt={props.pic}/>
                </button>
            </p>
        </div>
    );

}