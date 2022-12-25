function Button(props) {
    if(props.size){
        props.class = props.size;
    }
    if(props.color){
        props.class = props.color;
    }
    return ( 
        <button className={props.class}>{props.text}</button>
     );
}

export default Button;