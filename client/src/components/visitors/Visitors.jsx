import { useContext } from "react";
import { useAddVisior, useCheckVisior } from "../../hooks/useVisitors";
import { AuthContext } from "../../contexts/AuthContext";

export default function Visitors(props) {
    const { isAuthenticated, userId } = useContext(AuthContext);

    const [visitInfo, setVisitInfo] = useCheckVisior(userId, props.eventId);

    const addVisitor = useAddVisior();
    const addVisitorHandler = async () => {
       const result = await addVisitor(props.eventId);
       setVisitInfo(result);
      
    }
    
    const removeVisitorHandler = () => {};
    let isVisitor = false;
    console.log("Visit info");
    console.log(visitInfo)
   
    if(Object.keys(visitInfo).length !== 0){
        isVisitor = true;
    }
    console.log(isVisitor)

    return (
        <>
         {isAuthenticated && (
            <div className="container">
              {isVisitor ? (
                <button className="btn" onClick={removeVisitorHandler}>
                    CANCEL ATTEND
                </button>
              ) : (
                <button className="btn" onClick={addVisitorHandler}>
                   CONFRIM ATTEND
                </button>
              )}
            </div>
          )}</>
    )
}