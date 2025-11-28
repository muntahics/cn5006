import './App.css'
import './Calculator.css'
import React from "react";
import Button from "./Button.js";
import TextButton from './TextButton.js';
import {useState} from "react";
import pic from './ProfessionalBlackBG.png'


function KeyPadComponent(props){
    const [text1, setText ] = useState("")
    const [showpic, setShowpic] = useState(false)
    const ClickHandle = (e) => {
        if (e.target.value==="C")
        {
       
            setText("")    
        }
        else if(e.target.value==="show me"){
            setShowpic(true)
        }
        else if(e.target.value==="hide me"){
            setShowpic(false)
        }
        else if(e.target.value==="square"){
            setText(eval(text1*text1))
        alert(eval(text1*text1))
        }
        else if  (e.target.value==="=")
        {
        setText(eval(text1))
        alert(eval(text1))             
        }
        
        else
        setText(text1+e.target.value)
      };
    
   
        return (
            <div className="Calculator">
                {showpic ? <img src={pic} alt='pic' width={100} height={100}/>:null}
                <div className="screen-row">
                <input type="text" readOnly value= {text1} />
                </div>
                
               
               <div >
                <Button label="(" ClickHandle={ClickHandle} />
                <Button label="CE" ClickHandle={ClickHandle} />
                <Button label=")" ClickHandle={ClickHandle}/>
                <Button label="C" ClickHandle={ClickHandle}/> 
                </div>

                <div >
                <Button label="1"  ClickHandle={ClickHandle}/>
                <Button label="2" ClickHandle={ClickHandle}/>
                <Button label="3" ClickHandle={ClickHandle}/>
                <Button label="+" ClickHandle={ClickHandle}/>
                </div>
                <div >
                <Button label="4" ClickHandle={ClickHandle}/>
                <Button label="5" ClickHandle={ClickHandle}/>
                <Button label="6" ClickHandle={ClickHandle}/>
                <Button label="-" ClickHandle={ClickHandle}/>
                </div>
                <div >
                <Button label="7" ClickHandle={ClickHandle}/>
                <Button label="8" ClickHandle={ClickHandle}/>
                <Button label="9" ClickHandle={ClickHandle}/>
                <Button label="*" ClickHandle={ClickHandle}/>
                </div>
                <div >
                <Button label="." ClickHandle={ClickHandle}/>
                <Button label="0" ClickHandle={ClickHandle}/>
                <Button label="=" ClickHandle={ClickHandle}/>
                <Button label="/" ClickHandle={ClickHandle}/>
                </div>
                <div className='added' >
                <TextButton label={showpic? 'hide me':'show me'} ClickHandle={ClickHandle}/>
                <TextButton label='square' ClickHandle={ClickHandle}/>
                
                </div>
                
                
            </div>
        );
    
}
export default KeyPadComponent;