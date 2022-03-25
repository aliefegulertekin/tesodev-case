import { useContext, useEffect, useState } from "react";
import ListContext from "../../../store/list-context";
import classes from "./Pagination.module.css";

const Pagination = ({postsPerPage, onChangePage}) => {
    const ctx = useContext(ListContext);
    const [pageNumber, setPageNumber] = useState(1);
    const pageNumbers = [];
    
    for (let i = 0; i < Math.ceil(ctx.list.length / postsPerPage); i++) {
        pageNumbers.push(i+1);
    }


    useEffect(()=>{
        console.log(pageNumbers)
        onChangePage(pageNumber);
    },[pageNumber])

    const prevClickHandler = () => {
        if(pageNumber <= 1) {
           return setPageNumber(1);
        }
        setPageNumber(pageNumber-1);
    }

    const nextClickHandler = () => {
        console.log(pageNumber,pageNumbers.length)
        if(pageNumber >= pageNumbers.length) {
           return onChangePage(pageNumbers.length);
        }
        setPageNumber(pageNumber+1);

    }

    const numberClickHandler = (num) => {
        setPageNumber(num);
    }

    return <ul className={classes['page-number-list']}>
        <button className={classes['prev-button']} onClick={prevClickHandler}>Previous</button>
        {pageNumbers.map(number => 
        <li key={number} className={classes['page-number-list_element']}>
            <a  onClick={() => {numberClickHandler(number)}}>
                {number}
            </a>
        </li>)}
        <button className={classes['next-button']} onClick={nextClickHandler} >Next</button>
    </ul>
}


export default Pagination;