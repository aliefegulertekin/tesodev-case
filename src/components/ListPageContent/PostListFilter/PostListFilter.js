import { useState, useEffect, useContext } from "react";
import ListContext from "../../../store/list-context";

const PostListFilter = ({filteredList}) => {

    const [data, setData] = useState();

    const ctx = useContext(ListContext);

    useEffect(()=>{
        switch(data) {
            case 'name-ascending':
                const nameAscendedValue = filteredList.sort((a,b) => a > b)
                
                break
            case 'name-descending':
                const nameDescendedValue = filteredList.sort((a,b) => a < b)
                
                break
            case 'year-ascending':
                const yearAscendedValue = filteredList.sort((a,b) => a > b)
                break
            case 'year-descending':
                const yearDescendedValue = filteredList.sort((a,b) => a < b)     
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