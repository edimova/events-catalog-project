import * as request from './requester';

const BASE_URL = 'http://localhost:3030/users'

export const login = (email, password)=>{
    const authData =  request.post(`${BASE_URL}/login`,{email,password});
    return authData;
}

export const register = (email,password, username)=>{
    const responseData =  request.post(`${BASE_URL}/register`,{email,password, username});
    return responseData;
}

export const logout = ()=>{
    const logoutData = request.get(`${BASE_URL}/logout`);
    return logoutData;  
}

export const loadUser =(userId)=>{
    const logoutData = request.get(`${BASE_URL}/${userId}`);
    return logoutData;  
}