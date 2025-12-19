import styles from "./Footer.module.css";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.brand}>
          <h3>After Dark Supply Co.</h3>
          <p>Streetwear, after dark.</p>
        </div>
        <nav className={styles.links}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/cart">Cart</NavLink>
        </nav>
      </div>
      <div className={styles.credit}>
        <p>
          Built by Tyler Ngo - View{" "}
          <a href="https://github.com/thongster/odin-shopping-cart">
            Source Code
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
