export const getAcessToken=()=>{
    const authDataJson = localStorage.getItem('auth');
    if(!authDataJson){
        return '';
    }

    const authData = JSON.parse(authDataJson);
    return authData.accessToken;
}