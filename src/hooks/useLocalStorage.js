import {useState} from 'react';

export const useLocalStorage = (key, initialValue = '') => {
    const [storedValue, setStoredValue] = useState(()=>{
    try{
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }catch(err){
        console.log(err);
        return initialValue;
    }
    
    });
    
    const setValue =(value) =>{
        try{

            window.localStorage.setItem(key, JSON.stringify(value));
            setStoredValue(value);
        }catch(err){
            console.log(err);
        }
    }
    return [storedValue, setValue];
}