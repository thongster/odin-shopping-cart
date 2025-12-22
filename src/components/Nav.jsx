import styles from "./Nav.module.css";
import CartCount from "./CartCount";
import { NavLink } from "react-router";

export default function Nav({ cart }) {
  return (
    <>
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
        <CartCount cart={cart} />
      </NavLink>
    </div>
    <button className={styles.hamburger}>
          <span />
          <span />
          <span />
    </button>
        
    </>
  );
}
