import { useParams } from "react-router-dom";
import { useGetEventsByLocation } from "../../hooks/useEvents";
import EventCard from "../events/EventCard";

export default function LocationDetails() {
    const { locationId } = useParams();
    const [events, setEvents] = useGetEventsByLocation(locationId);

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