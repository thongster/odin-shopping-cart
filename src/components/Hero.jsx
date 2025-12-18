import styles from "./Hero.module.css";
import { Link } from "react-router"

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Streetwear, after dark.</h1>
          <p className={styles.heroSubtitle}>
            Curated pieces inspired by city nights, neon signs, and sidewalk
            culture.
          </p>
          <Link to="shop"><button className={styles.heroButton}>Shop the drop</button></Link>
      </div>
    </div>
  );
}
