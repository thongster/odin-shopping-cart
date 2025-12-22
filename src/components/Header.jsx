import styles from "./Header.module.css";
import logo from "../assets/logo.png";
import Nav from "./Nav";

export default function Header({ cart }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
        <h1 className={styles.title}>After Dark Supply Co.</h1>
      </div>
      <Nav cart={cart} />
    </header>
  );
}
