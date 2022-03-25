import classes from "./Input.module.css";

const Input = props => {

    return (<input 
    className={`${props.className} ${classes['input']}`}
    onChange={props.onChange}
    value={props.value} 
    defaultValue={props.defaultValue}
    onBlur= {props.onBlur}
    />)
}

export default Input;