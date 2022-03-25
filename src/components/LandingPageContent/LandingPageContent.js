import classes from "./LandingPageContent.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import { useContext, useEffect, useState } from "react";
import data from "../../data/mockData.json";
import LandingList from "./LandingPageList/LandingList";
import ListContext from "../../store/list-context";

const LandingPageContent = props => {

    const [inputValue, setInputValue] = useState('');
    const [filteredValue, setFilteredValue] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    const [showButtonVisible, setShowButtonVisible] = useState(false);
    const [showList, setShowList] = useState(false);
    const [inputValid, setInputValid] = useState(false);
    const [count, setCount] = useState(0);

    const ctx = useContext(ListContext);

    useEffect(()=>{
        ctx.addData(filteredValue);
        ctx.inputValue = inputValue;
       if(count > 0 && inputValue.length === 0) {
        setInputValid(true);
       }
       else {
           setInputValid(false);
       }
    },[filteredValue,count])


    const inputChangeHandler = (e) => {
       
        setCount(count+1);
        setInputValue(e.target.value);

    }

    const searchButtonHandler = () => {

        if(inputValue === 0) {
            return;
        }
        setFilteredValue(data.data.filter(d => d[0].toLowerCase().includes(inputValue.toLowerCase())));
        setShowList(true);
        setShowButtonVisible(true);
    }

    const focusInput = (e) => {
      
    }

    return (
         <div className= {classes['landing-page-container']}>
             <div className={classes['landing-img-container']}/>
            <div className={classes.login}>
                <div>
                    <Input className={`${inputValid ? classes.invalid : ''} ${classes['landing-input']}`} onBlur={focusInput} onChange={inputChangeHandler} value={inputValue} />
                </div>
                <Button className={classes['search-button']} onClick = {searchButtonHandler}/>      
            </div>
        {showList && <LandingList className={`${inputValid ? 'border-color': 'red'} ${classes['landing-list-container']}`} onVisibleShowButton={showButtonVisible} onUpdateData={filteredValue}/>}
        </div>
   )
}

export default LandingPageContent;