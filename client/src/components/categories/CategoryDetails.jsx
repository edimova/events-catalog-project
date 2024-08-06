import { useParams } from "react-router-dom";
import { useGetEventsByCategory } from "../../hooks/useEvents";
import EventCard from "../events/EventCard";

export default function CategoryDetails() {
  const { categoryId } = useParams();
  const [events, setEvents] = useGetEventsByCategory(categoryId);

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
        <h1>No event in this category</h1>
      )}
    </div>
  );
}
