import React, { useState } from "react";
import {Link} from "react-router-dom";
import LandingListElement from "./LadingListElement/LandingListElement";
import classes from "./LandingList.module.css";
import ListContext from "../../../store/list-context";
import Card from "../../UI/Card/Card";

const LandingList = props => {


//    
//     <span>{post[0]}</span> 
//     <span>Email: {post[2]}</span> 
// <span className={classes['element_date']} >{post[3]}</span> 

    return (
    <React.Fragment>
        <Card className={ `${props.className} ${classes['landing-list']}`}>
            {props.onUpdateData.slice(0,3).map(post => <LandingListElement key={Math.random()}>
            <div className={classes['element_name-email-container']}>
               <span>{post[0]}</span> 
               <span>Email: {post[2]}</span>
            </div>
            <span className={classes['element_date']} >{post[3]}</span> </LandingListElement>)}
        </Card>
       {props.onVisibleShowButton && <Link className={classes['show-button']} to={"/list-page"}>
       Show more
       </Link>
        }
    </React.Fragment>
   )
}

export default LandingList;