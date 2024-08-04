import { useEffect, useRef, useState } from "react";
import { useRegister } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [error, setError] = useState('');

    const [registerValues, setRegisterValues] = useState({
        email: '',
        username: '',
        password: '',
        repeatedPassword: '',
    });

    const inputRef = useRef();
    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async (email, password) => {
        try {
            await register(email, password);
            setError('');
            navigate('/');

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
        if (registerValues.password !== registerValues.repeatedPassword) {
            setError("Passpords did not match!");
            return;
        }
        console.log('Form Submitted');
        registerHandler(registerValues.email, registerValues.password)

    };

    const changeHandler = (e) => {
        setRegisterValues(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value,
        }));


    };

    return (
        <div className="input-form">
            <div className="row">

                <form onSubmit={formSubmitHandler}>
                    <div className="row">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            ref={inputRef}
                            name="username"
                            id="username"
                            value={registerValues.username}
                            onChange={changeHandler}
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={registerValues.email}
                            onChange={changeHandler}
                        />
                    </div>


                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="******"
                            value={registerValues.password}
                            onChange={changeHandler}
                        />
                    </div>


                    <div>
                        <label htmlFor="repeatedPassword">Repeat password</label>
                        <input
                            type="password"
                            name="repeatedPassword"
                            id="repeatedPassword"
                            placeholder="******"
                            value={registerValues.repeatedPassword}
                            onChange={changeHandler}
                        />
                    </div>

                    <div>
                        {error && (
                            <p>{error}</p>
                        )}

                    </div>

                    <div>
                        <input type="submit" value="Register" />
                    </div>
                </form>
            </div>
        </div>


    );
}