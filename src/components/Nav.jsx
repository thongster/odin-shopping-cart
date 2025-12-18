import styles from "./Nav.module.css";
import { Link } from "react-router";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <Link to="/" className={styles.navLink}>
        Home
      </Link>
      <Link to="shop" className={styles.navLink}>
        Shop
      </Link>
      <Link to="cart" className={styles.navLink}>
        Cart
      </Link>
    </div>
  );
}
