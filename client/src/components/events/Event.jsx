import { useNavigate } from "react-router-dom";

export default function Event(props) {
  const event = props.event;
  const navigate = useNavigate();

  const viewDetailsHandler = () => {
    navigate(`/events/${event._id}/details`);
  };

  return (
    <div className="container">
      <div className="row">
        <img className="event-image" src={`${event.url}`} alt="event" />
      </div>
      <div className="row">{event.name}, Date , Location</div>
      <div className="row">
        <button className="btn" onClick={viewDetailsHandler}>
          View
        </button>
      </div>
    </div>
  );
}
