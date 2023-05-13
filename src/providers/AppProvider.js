import React, { useReducer, createContext } from "react";

export const AppContext = createContext();

const initialState = {
    loggedIn: false,
    user: null,
};

function reducerFn(state, action){
    switch (action.type){
        case "login": {
            return{ user: action.payload, loggedIn: true};
    }
    case "logout": {
        return initialState;
}
        default:{
            return state;
        }
    }
}

export const AppProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducerFn, initialState);

    return (
    <AppContext.Provider value={{state, dispatch}}>
        {children}
    </AppContext.Provider>
    );
};
