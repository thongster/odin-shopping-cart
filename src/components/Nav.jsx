import styles from "./Nav.module.css";
import CartCount from "./CartCount";
import { NavLink } from "react-router";
import { useState, useEffect } from "react";

export default function Nav({ cart }) {
  const [isBurger, setIsBurger] = useState(false);

  const toggleIsBurger = () => {
    if (isBurger === true) {
      setIsBurger(false)
    } else if (isBurger === false) {
      setIsBurger(true)
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsBurger(false)
      }
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [])

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
    <button className={styles.hamburger} onClick={() => toggleIsBurger()}>
          <span />
          <span />
          <span />
    </button>
    <div className={ `${styles.mobileNav} ${isBurger 
      ? styles.open
      : "" }`}>
            <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? `${styles.mobileActiveLink} ${styles.mobileNavLink}` : styles.mobileNavLink
        }
      >
        Home
      </NavLink>
      <NavLink
        to="shop"
        className={({ isActive }) =>
          isActive ? `${styles.mobileActiveLink} ${styles.mobileNavLink}` : styles.mobileNavLink
        }
      >
        Shop
      </NavLink>
      <NavLink
        to="cart"
        className={({ isActive }) =>
          isActive ? `${styles.mobileActiveLink} ${styles.mobileNavLink}` : styles.mobileNavLink
        }
      >
        Cart
        <CartCount cart={cart} />
      </NavLink>
    </div>

    </>
  );
}
