import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";

import { useGetOneEvent, useRemoveEvent } from "../../hooks/useEvents";
import { AuthContext } from "../../contexts/AuthContext";
import { useGetOneLocationByID } from "../../hooks/useLocations";
import { useGetOneCaregory } from "../../hooks/useCategories";
import { formatDate } from "../../utils/utilDate";
import ConfirmView from "../common/ConfirmView";
import Visitors from "../visitors/Visitors";

export default function EventDetails() {
  const { eventId } = useParams();
  const {userId } = useContext(AuthContext);
  const [confirmOn, setConfirmOn] = useState(false);

  const [event, setEvent] = useGetOneEvent(eventId);

  const [location, setLocation] = useGetOneLocationByID(event?.location);
  const [category, setCategory] = useGetOneCaregory(event?.category);


  const removeEvent = useRemoveEvent();
  const navigate = useNavigate();


  const removeEventHandler = async () => {
    try {
      await removeEvent(eventId);
      navigate("/");
    } catch (err) {}
  };

  const confirmHandler = () => {
    setConfirmOn(true);
  };
  const cancelConfirmHandler = () => {
    setConfirmOn(false);
  };

  const isOwner = userId === event._ownerId;
  const dateString = formatDate(event.date);
  return (
    <>
      <div className="row">
        <img className="event-image" src={`${event.url}`} alt="event" />

        <div className="container">
          <h1 className="row">{event.name}</h1>
          <div className="row">DATE: {dateString}</div>
          <div className="row">LOCATION:{location?.name}</div>
          <div className="row">CATEGORY:{category?.name}</div>

          {isOwner && (
            <div className="row" style={{ justifyContent: "flex-end" }}>
              <NavLink to={`/events/${eventId}/edit`} className="btn">
                EDIT
              </NavLink>
              <button
                className="btn"
                style={{ marginLeft: 5 }}
                onClick={confirmHandler}
              >
                DELETE
              </button>
            </div>
          )}
        </div>
       <Visitors eventId={eventId}/>
      </div>
      {confirmOn && (
        <ConfirmView
          message={`Do you want to delete ${event.name} event?`}
          onConfirm={removeEventHandler}
          onCancel={cancelConfirmHandler}
        />
      )}
    </>
  );
}
