import { createContext, useState } from "react";
import usePersistedState from "../hooks/usePersistedState";

export const AuthContext = createContext();

export function AuthContextProvider(props) {
    const [authState, setAuthState] = usePersistedState('auth',{});

    const changeAuthState = (state)=>{
        setAuthState(state);
    }

    const logout = ()=>{
        setAuthState({})

    }
    const contextData={
        userId: authState._id,
        username:authState.username,
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,
        changeAuthState,
        logout

    }

    return (
        <AuthContext.Provider  value={contextData}>
           {props.children}
        </AuthContext.Provider>
    );
}



