import { useNavigate } from "react-router-dom";
import { useGetOneLocationByID } from "../../hooks/useLocations";
import { formatDate } from "../../utils/utilDate";

export default function EventCard(props) {
  const event = props.event;
  const navigate = useNavigate();
  const [location, setLocation] = useGetOneLocationByID(event.location);

  const viewDetailsHandler = () => {
    navigate(`/events/${event._id}/details`);
  };

  const dateString = formatDate(event.date)

  return (
    <div className="container">
      <div className="row">
        <img className="image" src={`${event.url}`} alt="event" />
      </div>
      <div className="column">
        <div className="row">{event.name}</div>
        <div className="row">
          {dateString}, {location.name}
        </div>
      </div>
      <div className="row">
        <button className="btn" onClick={viewDetailsHandler}>
          View
        </button>
      </div>
    </div>
  );
}
