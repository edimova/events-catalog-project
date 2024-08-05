import CategoriesList from "../categories/CategoriesList";
import UpcomingEvents from "../events/UpcomingEvents";
import LocationsList from "../locations/LocationsList";

export default function Home() {
    return (
        <div className="container">
            <h2 className="row">UPCOMING EVENTS</h2>
            <div className="container" style={{ borderTopStyle: "solid", borderColor: "red", borderWidth: 1 }}>
                <UpcomingEvents />
            </div>
            <h2 className="row">CATEGORIES</h2>
            <div className="container" style={{ borderTopStyle: "solid", borderColor: "red", borderWidth: 1 }}>
                <CategoriesList />
            </div>
            <h2 className="row">LOCATIONS</h2>
            <div className="container" style={{ borderTopStyle: "solid", borderColor: "red", borderWidth: 1 }}>
                  <LocationsList />
             </div>
        </div>
    )
}