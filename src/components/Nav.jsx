import styles from "./Nav.module.css";
import { NavLink } from "react-router";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? `${styles.activeLink} ${styles.navLink}` : styles.navLink
        }
      >
        Home
      </NavLink>
      <NavLink
        to="shop"
        className={({ isActive }) =>
          isActive ? `${styles.activeLink} ${styles.navLink}` : styles.navLink
        }
      >
        Shop
      </NavLink>
      <NavLink
        to="cart"
        className={({ isActive }) =>
          isActive ? `${styles.activeLink} ${styles.navLink}` : styles.navLink
        }
      >
        Cart
      </NavLink>
    </div>
  );
}
