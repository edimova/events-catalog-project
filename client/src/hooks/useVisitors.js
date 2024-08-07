import { useEffect, useState } from "react";
import visitorAPI from "../api/visitors-api";

export function useAddVisior(){

    const createVisitorHandler=(eventID)=>{
          return   visitorAPI.create(eventID);
    }

    return createVisitorHandler;
}


export function useRemoveVisior(){

    const removeVisitorHandler=(userID, eventID)=>{

             visitorAPI.remove(remove);
    }

    return removeVisitorHandler;
}

export function useCheckVisior(userID, eventID){
    const  [visit, setVisit] = useState({});
    useEffect(()=>{
        (async () =>{
               const result = await visitorAPI.getVisits(userID, eventID);
               let visitInfo ={}
               if(result.length >0){
                visitInfo = result.at(0)
               }
            
               setVisit(visitInfo);
        })();

    },[userID, eventID]);
    return [visit, setVisit]    
}