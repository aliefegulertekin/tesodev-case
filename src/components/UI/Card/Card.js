import classes from "./Card.module.css";

const Card = props => {

return (<ul className={`${props.className} ${classes.card}`}>
    {props.children}
</ul>)
}

export default Card;