import './App.css'

function GreetingElementWithProp(props){
    const greeting = 'Hello Lets start learning function Component...';
    console.log(`Prop is`,props.msg)
    return(
        <div className='App'>
            <h1>{props.msg}</h1>
        </div>
    )
}

export default GreetingElementWithProp;