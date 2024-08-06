import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/events'

const getAll = async() =>{
    const result = await request.get(BASE_URL);
    const events = Object.values(result);
    return events

}

const getOne =  (eventID)=>{
    return  request.get(`${BASE_URL}/${eventID}`);
}

const create = (eventData)=>{
    return request.post(`${BASE_URL}`, eventData)
}

const getAllByRelation =(relation) =>{    
    const params = new URLSearchParams({
        where: `${relation.key}="${relation.value}"`
    })

    return request.get(`${BASE_URL}?${params.toString()}`);

}

const remove = (eventID)=>{
    return request.remove(`${BASE_URL}/${eventID}`)
}

const update = (eventID, eventData) =>{
    return request.put(`${BASE_URL}/${eventID}`, eventData)

}
const getUpcoming = async()=>{
    const params = new URLSearchParams({
        sortBy:`date`,
        pageSize: 4,
    })
    const result = await request.get(`${BASE_URL}?${params.toString()}`);
    console.log(result)
    const upcomming = Object.values(result);
    return upcomming;

}
const eventsAPI={
    getAll,
    getOne,
    create,
    remove,
    update,
    getUpcoming,
    getAllByRelation,
}

export default eventsAPI