import { useGetAllEvents } from "../../hooks/useEvents";
import Event from "./Event";

export default function EventsList() {
  const [events, setEvents] = useGetAllEvents();

  return (
    <div className="row">
      <ul className="row">
        {events.map((event) => {
          return <Event key={event._id} event={event} />;
        })}
      </ul>
    </div>
  );
}
