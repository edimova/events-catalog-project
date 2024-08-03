import * as request from './requester';

const BASE_URL = 'http://localhost:3030/collections/events'

const getAll = async() =>{
    const result = await request.get(BASE_URL);
    const events = Object.values(result);
    return events

}

const getOne = async (eventID)=>{
    return  await request.get(`${BASE_URL}/${eventID}`);
}
const eventsAPI={
    getAll,
    getOne
}

export default eventsAPI