import { useParams } from "react-router-dom";
import { useGetOneEvent } from "../../hooks/useEvents";

export default function EventDetails() {
  const { eventId } = useParams();
  const [event, setEvent] = useGetOneEvent(eventId);

  return (
    <div className="row">
      <img className="event-image" src={`${event.url}`} alt="event" />

      <div className="container">
        <h1 className="row">{event.name}</h1>
        <div className="row">DATE: {event.date}</div>
        <div className="row">LOCATION:{event.location}</div>
        <div className="row">{event.category}</div>

        <div className="row" style={{ justifyContent: "flex-end" }}>
          <button className="btn">EDIT</button>
          <button className="btn" style={{ marginLeft: 5 }}>
            DELETE
          </button>
        </div>
      </div>
      <div className="container">
        <button className="btn">ATTENDING</button>
        <button className="btn">NOT ATTENDING</button>
      </div>
    </div>
  );
}
