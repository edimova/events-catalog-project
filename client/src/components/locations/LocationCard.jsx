import { useNavigate } from "react-router-dom";

export default function LocationCard(props) {
    const location = props.location;
    const navigate = useNavigate();
  
    const viewDetailsHandler = () => {
      navigate(`/locations/${location._id}/details`);
    };
  
    return (
      <div className="container">
        <div className="row">
          <img className="image" src={`${location.url}`} alt="location" />
        </div>
        <div className="row">{location.name}</div>
        <div className="row">
          <button className="btn" onClick={viewDetailsHandler}>
            View Events
          </button>
        </div>
      </div>
    );
}   