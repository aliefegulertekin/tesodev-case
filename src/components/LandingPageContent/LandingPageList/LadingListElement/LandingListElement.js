import classes from "./LandingListElement.module.css";

const LandingListElement = props => {

    return (<li className={classes['landing-list-element']}>{props.children}</li>)
}

export default LandingListElement;