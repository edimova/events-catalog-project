import { useGetAllLocations } from "../../hooks/useLocations";
import LocationCard from "./LocationCard";

export default function LocationsList() {
    const [locations, setLocations] = useGetAllLocations();

    return (
      <div className="row">
        <ul className="row">
          {locations.map((location) => {
            return <LocationCard key={location._id} location={location} />;
          })}
        </ul>
      </div>
    );
}