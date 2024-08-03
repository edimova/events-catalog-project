import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateEvent } from "../../hooks/useEvents";

export default function CreateEvent() {
    const [error, setError] = useState('');

    const [event, setEvent] = useState({
        name: '',
        date: '',
        description: '',
        url: '',
        category:'',
        location: '',
    });

    const inputRef = useRef();
    const navigate = useNavigate();
    const createEvent = useCreateEvent();

    const createHandler = async () => {      
        try {
           const {_id:eventId} =  await createEvent(event);
            
           navigate(`/events/${eventId}/details`);

        } catch (error) {
            setError(error.message);
            console.log(error.message);
        }

    }


    useEffect(() => {
        inputRef.current.focus();
    }, []);


    const formSubmitHandler = (e) => {
        e.preventDefault();
       createHandler();

    };

    const changeHandler = (e) => {
        setEvent(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value,
        }));


    };

    return (
        <section>
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
                        <option value="music">Music</option>
                        <option value="sport">Sport</option>

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
                    <input
                        type="text"
                        name="location"
                        id="location"
                        value={event.location}
                        onChange={changeHandler}
                    />
                </div>

                <div>
                    {error && (
                        <p>{error}</p>
                    )}

                </div>

                <div>
                    <input type="submit" value="Create" />
                </div>
            </form>
        </section>
    );
}