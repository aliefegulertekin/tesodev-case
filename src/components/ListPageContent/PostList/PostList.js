import { useContext, useState } from "react";
import ListContext from "../../../store/list-context";
import Card from "../../UI/Card/Card";
import Pagination from "../Pagination/Pagination";
import classes from "./PostList.module.css";

const PostList = () => {


    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(5);

    const ctx = useContext(ListContext);


    const indexOfLastPost = currentPage * postPerPage;
    const indexOffirstPost = indexOfLastPost - postPerPage;
    const currentPosts = ctx.list.slice(indexOffirstPost, indexOfLastPost);

    const changePageHandler = (num) => {
        setCurrentPage(num);
    }

    return (
         <Card className= {classes['post-list-container']}>
           {currentPosts.map(post => 
            <li className={classes['post-list_element']} key={Math.random()}>
                <div className={classes['element_name-email-container']}>
                    <span>{post[0]}</span> 
                    <span>Email: {post[2]}</span> 
                </div>
                <span className={classes['element_date']} >{post[3]}</span> 

            </li>)}
            <Pagination postsPerPage={postPerPage} onChangePage={changePageHandler}/>
        </Card>
      
    )
}

export default PostList;