import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/categories'

const getAll = async() =>{
    const result = await request.get(BASE_URL);
    return result

}

const getOne =  (categoryId)=>{
    return  request.get(`${BASE_URL}/${categoryId}`);
}



const categoriesAPI={
    getAll,
    getOne,
   
}

export default categoriesAPI