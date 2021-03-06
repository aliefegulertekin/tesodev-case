import React from "react";
import classes from "./Button.module.css";

const Button = props => {

    return <button className={`${props.className} ${classes.button} `}
    onClick={props.onClick}
    >Search</button>
}

export default Button;