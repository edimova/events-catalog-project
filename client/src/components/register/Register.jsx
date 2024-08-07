import { useEffect, useRef, useState } from "react";
import { useRegister } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";

export default function Register() {
  const [error, setError] = useState("");

  const [registerValues, setRegisterValues] = useState({
    email: "",
    username: "",
    password: "",
    repeatedPassword: "",
  });

  const inputRef = useRef();
  const register = useRegister();
  const navigate = useNavigate();

  const registerHandler = async (email, password,username) => {
    try {
      await register(email, password,username);
      setError("");
      navigate("/");
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
    if (registerValues.password !== registerValues.repeatedPassword) {
      setError("Passpords did not match!");
      return;
    }
    console.log("Form Submitted");
    registerHandler(registerValues.email, registerValues.password, registerValues.username);
  };

  const changeHandler = (e) => {
    setRegisterValues((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className={styles.form}>
      <div className={styles.form_container}>
        <form onSubmit={formSubmitHandler}>
          <div className={styles.row}>
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

          <div className={styles.row}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={registerValues.email}
              onChange={changeHandler}
            />
          </div>

          <div className={styles.row}>
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

          <div className={styles.row}>
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

          <div>{error && <p>{error}</p>}</div>

          <div>
            <button className="btn" type="submit">
              REGISTER
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
