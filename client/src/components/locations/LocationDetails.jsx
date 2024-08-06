import { useParams } from "react-router-dom";
import { useGetEventsByLocation } from "../../hooks/useEvents";
import EventCard from "../events/EventCard";

export default function LocationDetails() {
  const { locationId } = useParams();
  const [events, setEvents] = useGetEventsByLocation(locationId);

  const hasEvents = events && events.length > 0;
  return (
    <div className="row">
      {hasEvents ? (
        <ul className="row">
          {events.map((event) => {
            return <EventCard key={event._id} event={event} />;
          })}
        </ul>
      ) : (
        <h1>No events for this location</h1>
      )}
    </div>
  );
}
