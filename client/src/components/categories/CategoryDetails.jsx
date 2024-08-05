import { useParams } from "react-router-dom";
import { useGetEventsByCategory } from "../../hooks/useEvents";
import EventCard from "../events/EventCard";

export default function CategoryDetails() {
    const { categoryId } = useParams();
    const [events, setEvents] = useGetEventsByCategory(categoryId);

    return (

        <div className="row">
            <ul className="row">
                {events.map((event) => {
                    return <EventCard key={event._id} event={event} />;
                })}
            </ul>
        </div>


    )
}