import { useState } from "react";

export default function usePersistedState(key,initialState){
    const [state, setState] = useState(()=>{
        const persitedAuth = localStorage.getItem(key);
        if(!persitedAuth){
            return initialState;
        }
        const authData = JSON.parse(persitedAuth);
        return authData;

    });

    const updateState = (value)=>{    
        
        localStorage.setItem(key, JSON.stringify(value))        
        setState(value)   
    }

    return [state, updateState];
}