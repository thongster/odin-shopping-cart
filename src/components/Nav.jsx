import styles from "./Nav.module.css";
import { NavLink } from "react-router";

export default function Nav() {

  return (
    <div className={styles.nav}>
      <NavLink to="/" className={styles.navLink}>
        Home
      </NavLink>
      <NavLink to="shop" className={styles.navLink}>
        Shop
      </NavLink>
      <NavLink to="cart" className={styles.navLink}>
        Cart
      </NavLink>
    </div>
  );
}
