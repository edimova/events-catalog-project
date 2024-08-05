import { useEffect, useState } from "react";
import eventsAPI from "../api/events-api"

export function useGetAllEvents(){
    const  [events, setEvents] = useState([]);
    useEffect(()=>{
        (async () =>{
               const result = await eventsAPI.getAll();
               setEvents(result);
        })();

    },[]);
    return [events, setEvents]
}

export function useGetOneEvent(eventID){
    const [event, setEvent] = useState({});

    useEffect(()=>{
        (async ()=>{
            const result = await eventsAPI.getOne(eventID);
            setEvent(result);
        })()
    },[eventID])
    
    return [event, setEvent];

}
export function useCreateEvent(){
    const eventCreateHandler = (eventData)=>{
       const result =  eventsAPI.create(eventData)
       return result;
    }
    return eventCreateHandler;
}

export function useGetEventsByLocation(locationID){
    const  [events, setEvents] = useState([]);
    useEffect(()=>{
        (async () =>{
               const result = await eventsAPI.getAllByRelation({key:"location",value:`${locationID}`});
               setEvents(result);
        })();

    },[]);
    return [events, setEvents]    
}

export function useGetEventsByCategory(categoryID){
    const  [events, setEvents] = useState([]);
    useEffect(()=>{
        (async () =>{
               const result = await eventsAPI.getAllByRelation({key:"category",value:`${categoryID}`});
               setEvents(result);
        })();

    },[]);
    return [events, setEvents]    
}