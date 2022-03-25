import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import PostList from "./PostList/PostList";
import classes from "./ListPageContent.module.css";
import ListContext from "../../store/list-context";
import { useContext, useEffect, useState } from "react";
import data from "../../data/mockData.json";
import PostListFilter from "./PostListFilter/PostListFilter";


const ListPageContent = () => {

    const [inputValue, setInputValue] = useState('');
    const [filteredValue, setFilteredValue] = useState([]);
    const [count, setCount] = useState(0);

    const ctx = useContext(ListContext);

    useEffect(()=>{
        if(count!==0) {
            ctx.addData(filteredValue);
        }
    },[count])

    const inputHandler = (e) => {

        setInputValue(e.target.value);
    }

    const searchHandler = () => {
        if(inputValue.length === 0) {
            return;
        }
       setFilteredValue(data.data.filter(d => d[0].toLowerCase().includes(inputValue.toLowerCase())));
       setCount(count+1);
       
    }
    
    return (
        <div className={classes['list-page-container']} >
            <div className={classes.login} >
                <div className={classes['post-list-img-container']}/>
                <Input onChange={inputHandler} className={classes.input}/>
                <Button onClick={searchHandler} className={classes.button}/>
            </div>
            {/* <PostListFilter filteredList= {filteredValue} /> */}
            <PostList/>
        </div>
    )
}

export default ListPageContent;