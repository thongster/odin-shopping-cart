import styles from "./Hero.module.css";
import { Link } from "react-router";
import { useRef } from "react";

export default function Hero() {
  const ctaRef = useRef(null);

  const handleMouseMove = (e) => {
    const div = ctaRef.current;
    if (!div) return;

    const rect = div.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    div.style.setProperty("--x", `${x}px`);
    div.style.setProperty("--y", `${y}px`);
  };

  return (
    <div ref={ctaRef} className={styles.hero} onMouseMove={handleMouseMove}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Streetwear, after dark.</h1>
        <p className={styles.heroSubtitle}>
          Curated pieces inspired by city nights, neon signs, and sidewalk
          culture.
        </p>
        <Link to="shop">
          <button className={styles.heroButton}>Shop the drop</button>
        </Link>
      </div>
    </div>
  );
}
