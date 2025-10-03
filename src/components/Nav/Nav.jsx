import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={({ isActive }) => `${isActive ? styles.active : ""}`}>
        Home
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => `${isActive ? styles.active : ""}`}>
        About
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => `${isActive ? styles.active : ""}`}>
        Contact
      </NavLink>
    </nav>
  );
}
