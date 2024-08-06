import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/visitors'

const getAll = async() =>{
    const result = await request.get(BASE_URL);
    const events = Object.values(result);
    return events

}


const create = (eventID)=>{
    return request.post(`${BASE_URL}`, {eventID})
}


const getAllByRelation =(relation) =>{    
    const params = new URLSearchParams({
        where: `${relation.key}="${relation.value}"`
    })

    return request.get(`${BASE_URL}?${params.toString()}`);

}

const getVisits =(userID, eventID)=>{
    const params = new URLSearchParams({
        where: `"_ownerId"="${userID}","_id"="${eventID}"`,        
    })

    console.log(params.toString())
    return request.get(`${BASE_URL}?${params.toString()}`);
}

const visitorAPI={
    getAll,
    create,
    getAllByRelation,
    getVisits,
}

export default visitorAPI