export default function TextButton(props){
    return (
        
        <button class="AddedButtonStyle" value={props.label}  onClick={props.ClickHandle} > {props.label}  </button>
      
    );
}