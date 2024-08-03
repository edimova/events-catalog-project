import { login } from "../api/auth-api"

export const useLogin = ()=>{
    const loginHandler = async(email, password)=>{
        try{
           const result =  await login(email,password);
           console.log(result)
        }catch(err){
            console.log(err.message)
        }
       
    }
   
    return loginHandler
}