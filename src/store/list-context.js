import React, { useState } from "react";

const ListContext = React.createContext({
    list: [],
    inputValue: '',
    addData: (data)=>{}
});


export const ListContextProvider = props => {
    const [filteredValue, setFilteredValue] = useState([]);
    const [inputValue, setInputValue] = useState([]);

const addData = (e) => {
    setFilteredValue(e);
}


return <ListContext.Provider value={{
    list: filteredValue,
    inputValue: inputValue,
    addData: addData
    }}>{props.children}</ListContext.Provider>
}

export default ListContext;

