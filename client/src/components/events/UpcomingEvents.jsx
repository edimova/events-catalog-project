import { useGetAllEvents } from "../../hooks/useEvents";
import EventCard from "./EventCard";

export default function UpcomingEvents() {
    const [events, setEvents] = useGetAllEvents();

    return (
      <div className="row">
        <ul className="row">
          {events.map((event) => {
            return <EventCard key={event._id} event={event} />;
          })}
        </ul>
      </div>
    )}