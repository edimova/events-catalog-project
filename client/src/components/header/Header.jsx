import { NavLink } from "react-router-dom";

import styles from "./Header.module.css"
import { useContext } from "react";
import { AuthContext }from "../../contexts/AuthContext.jsx";
import { useGetUser } from "../../hooks/useAuth.js";

export default function Header() {
    const { isAuthenticated, username } = useContext(AuthContext);
  
    console.log(username)
    return (
        <header className="header">
            <nav className={styles.div}>
                <div className="row">
                    <NavLink to="/" className={styles.link} >HOME</NavLink>
                    <NavLink to="/events" className={styles.link}>EVENTS</NavLink>
                    <NavLink to="/categories" className={styles.link}>CATEGORIES</NavLink>
                    <NavLink to="/locations" className={styles.link}>LOCATIONS</NavLink>

                    {isAuthenticated ?
                        (<div id="user" className={styles.div}>
                            <NavLink to="/events/create" className={styles.link}>CREATE EVENT</NavLink>                           
                            <NavLink to="/logout" className={styles.link}>LOG OUT</NavLink>
                            <div className={styles.link}> UserName: {username}</div>
                        </div>
                        ) :
                        (<div id="guest" className={styles.div}>
                            <NavLink to="/register" className={styles.link}>REGISTER</NavLink>
                            <NavLink to="/login" className={styles.link}>LOGIN</NavLink>
                        </div>
                        )
                    }
                </div>
            </nav>
        </header>

    )
}