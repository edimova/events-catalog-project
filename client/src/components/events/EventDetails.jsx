import { useParams } from "react-router-dom";
import { useContext } from "react";

import { useGetOneEvent } from "../../hooks/useEvents";
import { AuthContext } from "../../contexts/AuthContext";
import { useAddVisior, useCheckVisior } from "../../hooks/useVisitors";

export default function EventDetails() {
    const { eventId } = useParams();
    const [event, setEvent] = useGetOneEvent(eventId);
    const { isAuthenticated, userId } = useContext(AuthContext);
    const [isVisitor, setIsVisitor] = useCheckVisior(userId, eventId);

    const addVisitor = useAddVisior();

    const addVisitorHandler = () => {
        addVisitor(eventId);
    }

    const removeVisitorHandler = () => {

    }

    const isOwner = userId === event._ownerId

    return (
        <div className="row">
            <img className="event-image" src={`${event.url}`} alt="event" />

            <div className="container">
                <h1 className="row">{event.name}</h1>
                <div className="row">DATE: {event.date}</div>
                <div className="row">LOCATION:{event.location}</div>
                <div className="row">{event.category}</div>

                {isOwner && (
                    <div className="row" style={{ justifyContent: "flex-end" }}>
                        <button className="btn">EDIT</button>
                        <button className="btn" style={{ marginLeft: 5 }}>
                            DELETE
                        </button>
                    </div>
                )}
            </div>
            {isAuthenticated && (
                <div className="container">
                    {isVisitor ?
                        (<button className="btn" onClick={removeVisitorHandler}>NOT ATTENDING</button>) :
                        (<button className="btn" onClick={addVisitorHandler}>ATTENDING</button>)
                    }

                </div>
            )}

        </div>
    );
}
