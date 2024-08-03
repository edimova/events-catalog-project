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
    const [event, setEvent] = useState([]);

    useEffect(()=>{
        (async ()=>{
            const result = await eventsAPI.getOne(eventID);
            setEvent(result);
        })()
    },[])
    
    return [event];

}