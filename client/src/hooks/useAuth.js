import { useContext } from "react";
import { login, register } from "../api/auth-api"
import { AuthContext } from "../contexts/AuthContext.jsx";

export const useLogin = ()=>{
    const {changeAuthState} = useContext(AuthContext);

    const loginHandler = async(email, passWord)=>{        
           const {password, ...authData} =  await login(email,passWord);
           changeAuthState(authData);
           return authData;
    }
        
    return loginHandler
}


export const useRegister = ()=>{
    const {changeAuthState} = useContext(AuthContext);

    const registerHandler = async(email, passWord)=>{        
           const {password, ...authData} =  await register(email,passWord);
           changeAuthState(authData);
           return authData;
    }
        
    return registerHandler
}
