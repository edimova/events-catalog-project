import { useEffect, useState } from "react";
import visitorAPI from "../api/visitors-api";

export function useAddVisior(){

    const createVisitorHandler=(eventID)=>{
             visitorAPI.create(eventID);
    }

    return createVisitorHandler;
}

export function useCheckVisior(userID, eventID){
    const  [isVisitor, setIsVisitor] = useState(false);
    useEffect(()=>{
        (async () =>{
               const result = await visitorAPI.getVisits(userID, eventID);
               console.log(result);
               const isVisit = result.length >0;
               setIsVisitor(isVisit);
        })();

    },[userID, eventID]);
    return [isVisitor, setIsVisitor]    
}