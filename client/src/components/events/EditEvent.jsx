import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useCreateEvent, useGetOneEvent } from "../../hooks/useEvents";
import { useGetAllLocations } from "../../hooks/useLocations";
import { useCategories } from "../../hooks/useCategories";
import eventsAPI from "../../api/events-api";
import { useForm } from "../../hooks/useForm";

const initialValues = {
    name:'',
    date:'',
    category:'',
    description:'',
    url:'',
    location:''

};

export default function EditEvent() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {eventId} = useParams()
  const [event, setEvent] = useGetOneEvent(eventId);  
  const {
    values,
    changeHandler,
    submitHandler
   } = useForm(event,
       async(values)=>{
           const updatedEvent= await eventsAPI.update(eventId, values)
           navigate(`/events/${eventId}/details`)
       })


  const inputRef = useRef();
  
  const [locations] = useGetAllLocations();
  const [categories] = useCategories();



  useEffect(() => {
    inputRef.current.focus();
  }, []);


  return (
    <section className="container">
      <form onSubmit={submitHandler}>
        <div className="container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            ref={inputRef}
            name="name"
            id="name"
            value={values.name}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="date">Data</label>
          <input
            type="date"
            name="date"
            id="date"
            value={values.date}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            value={values.category}
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
            value={values.description}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor="url">Image</label>
          <input
            type="text"
            name="url"
            id="url"
            value={values.url}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor="location">Location</label>
          <select
            name="location"
            id="location"
            value={values.location}
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
            UPDATE
          </button>
        </div>
      </form>
    </section>
  );
}
