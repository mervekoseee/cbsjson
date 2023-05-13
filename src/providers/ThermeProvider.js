import React,{ createContext, useEffect, useReducer } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const ThemeContext = createContext();

const initialState = false;
 // false -->light mode, true -->dark mode

 function reducerFn(state, action){
    switch(action.type){
        case "CHANGE_THEME":
            return action.payload;
        default:
            return state;
    }
 }

 export const ThemeProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducerFn, initialState);
const [theme] = useLocalStorage('theme');
    //set state value according to localstorage theme value
    useEffect(() => {
        dispatch({type: "CHANGE_THEME", payload: theme})
    }, [dispatch, theme])

    return (
    <ThemeContext.Provider value={{state, dispatch}}>
        {children}
    </ThemeContext.Provider>)

 }