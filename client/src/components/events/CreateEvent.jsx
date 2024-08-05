import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCreateEvent } from "../../hooks/useEvents";
import { useLocations } from "../../hooks/useLocations";
import { useCategories } from "../../hooks/useCategories";

export default function CreateEvent() {
  const [error, setError] = useState("");

  const [event, setEvent] = useState({
    name: "",
    date: "",
    description: "",
    url: "",
    category: "",
    location: "",
  });

  const inputRef = useRef();
  const navigate = useNavigate();
  const createEvent = useCreateEvent();
  const [locations] = useLocations();
  const [categories] = useCategories();

  const createHandler = async () => {
    try {
      const { _id: eventId } = await createEvent(event);

      navigate(`/events/${eventId}/details`);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    createHandler();
  };

  const changeHandler = (e) => {
    setEvent((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="container">
      <form onSubmit={formSubmitHandler}>
        <div className="container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            ref={inputRef}
            name="name"
            id="name"
            value={event.name}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="date">Data</label>
          <input
            type="date"
            name="date"
            id="date"
            value={event.date}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            value={event.category}
            onChange={changeHandler}
          >
            <option key="empty" value=""></option>
            {categories.map((category) => {
              return (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={event.description}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor="url">Image</label>
          <input
            type="text"
            name="url"
            id="url"
            value={event.url}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor="location">Location</label>
          <select
            name="location"
            id="location"
            value={event.location}
            onChange={changeHandler}
          >
            <option key="empty" value=""></option>
            {locations.map((location) => {
              return (
                <option key={location._id} value={location._id}>
                  {location.name}
                </option>
              );
            })}
          </select>
        </div>

        <div>{error && <p>{error}</p>}</div>

        <div>
          <button className="btn" type="submit">
            CREATE
          </button>
        </div>
      </form>
    </section>
  );
}
