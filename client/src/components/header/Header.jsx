import { NavLink } from "react-router-dom";

import styles from "./Header.module.css"

export default function Header() {
    return (
        <header className="header">
            <nav >
                <NavLink
                    to="/"
                    className={styles.link}
                >
                    HOME
                </NavLink>
                <NavLink
                    to="/categories"
                    className={styles.link}
                >
                    CATEGORIES
                </NavLink>
                <NavLink
                    to="/locations"
                    className={styles.link}
                >
                    LOCATIONS
                </NavLink>
                <NavLink
                    to="/register"
                    className={styles.link}
                >
                    REGISTER
                </NavLink>
                <NavLink
                    to="/sing-in"
                    className={styles.link}
                >
                    SIGN IN
                </NavLink>
                <NavLink
                    to="/logout"
                    className={styles.link}
                >
                    LOG OUT
                </NavLink>

            </nav>
        </header>

    )
}