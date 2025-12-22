import styles from "./Header.module.css";
import Nav from "./Nav";

export default function Header({ cart }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>After Dark Supply Co.</h1>
      <Nav cart={cart} />
    </header>
  );
}
