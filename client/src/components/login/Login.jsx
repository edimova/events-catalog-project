import { useEffect, useRef, useState } from "react";
import { useLogin } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

export default function Login() {
  const [error, setError] = useState("");
  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const login = useLogin();

  const useLoginHandler = async (email, password) => {
    try {
      await login(email, password);

      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    useLoginHandler(loginValues.email, loginValues.password);
  };

  const changeHandler = (e) => {
    setLoginValues((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className={styles.form}>
      <div className={styles.form_container}>
        <form id="login" onSubmit={formSubmitHandler}>
          <div className={styles.row}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              ref={inputRef}
              name="email"
              id="email"
              value={loginValues.email}
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
              value={loginValues.password}
              onChange={changeHandler}
            />
          </div>
          {error ?? <p>{error}</p>}
          <div>
            <button className="btn" type="submit">
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
