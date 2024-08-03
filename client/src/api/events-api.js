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
const eventsAPI={
    getAll,
    getOne,
    create
}

export default eventsAPI