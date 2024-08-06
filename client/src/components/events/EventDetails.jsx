import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";

import { useGetOneEvent, useRemoveEvent } from "../../hooks/useEvents";
import { AuthContext } from "../../contexts/AuthContext";
import { useAddVisior, useCheckVisior } from "../../hooks/useVisitors";
import { useGetOneLocationByID } from "../../hooks/useLocations";
import { useGetOneCaregory } from "../../hooks/useCategories";
import { formatDate } from "../../utils/utilDate";

export default function EventDetails() {
  const { eventId } = useParams();
  const [event, setEvent] = useGetOneEvent(eventId);
  const { isAuthenticated, userId } = useContext(AuthContext);
  const [isVisitor, setIsVisitor] = useCheckVisior(userId, eventId);
  const [location, setLocation] = useGetOneLocationByID(event?.location);

  const [category, setCategory] = useGetOneCaregory(event.category);
  const addVisitor = useAddVisior();
  const removeEvent = useRemoveEvent();
  const navigate = useNavigate()

  const addVisitorHandler = () => {
    addVisitor(eventId);
  };

  const removeVisitorHandler = () => {
    
  };

  const removeEventHandler = async() =>{
    try{
      const isConfirmed = confirm(`Do you want to delete ${event.name} event`)
      if(!isConfirmed){
        return;
      }
      await removeEvent(eventId);
      navigate("/")
    }catch(err){
      
    }
  }

  const isOwner = userId === event._ownerId;
  const dateString = formatDate(event.date)
  return (
    <div className="row">
      <img className="event-image" src={`${event.url}`} alt="event" />

      <div className="container">
        <h1 className="row">{event.name}</h1>
        <div className="row">DATE: {dateString}</div>
        <div className="row">LOCATION:{location?.name}</div>
        <div className="row">CATEGORY:{category?.name}</div>

        {isOwner && (
          <div className="row" style={{ justifyContent: "flex-end" }}>
            <NavLink to= {`/events/${eventId}/edit`}className="btn">EDIT</NavLink>
            <button className="btn" style={{ marginLeft: 5 }} onClick={removeEventHandler}>
              DELETE
            </button>
          </div>
        )}
      </div>
      {isAuthenticated && (
        <div className="container">
          {isVisitor ? (
            <button className="btn" onClick={removeVisitorHandler}>
              NOT ATTENDING
            </button>
          ) : (
            <button className="btn" onClick={addVisitorHandler}>
              ATTENDING
            </button>
          )}
        </div>
      )}
    </div>
  );
}
