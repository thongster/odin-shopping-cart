import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.heroTitle}>Streetwear, after dark.</h1>
      <p className={styles.heroSubtitle}>
        Curated pieces inspired by city nights, neon signs, and sidewalk
        culture.
      </p>
      <button className={styles.heroButton}>Shop the drop</button>
    </div>
  );
}
