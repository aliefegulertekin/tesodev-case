import { useState, useEffect, useContext } from "react";
import ListContext from "../../../store/list-context";

const PostListFilter = ({filteredList}) => {

    const [data, setData] = useState();

    const ctx = useContext(ListContext);

    useEffect(()=>{
        switch(data) {
            case 'name-ascending':
                const a = filteredList.sort(function(a,b){
                    return a.localeCompare(b);
                })
                console.log(a);
                break
            case 'name-descending':
                const c = filteredList.sort(function(a,b){
                    return b.localeCompare(a);
                })
                console.log(c);
                
                break
        }
    },[data])

    const changeValueHandler = (e) => {
        // setData()
        setData(e.target.value)
    }

    return (
        <select onChange={changeValueHandler}>
            <option value={'name-ascending'}>Name ascending</option>
            <option value={'name-descending'}>Name descending</option>
            <option value={'year-ascending'}>Year ascending</option>
            <option value={'year-descending'}>Year descending</option>
        </select>
    )
}

export default PostListFilter;