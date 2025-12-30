import styles from "./softCta.module.css";
import { NavLink } from "react-router";
import { useRef } from "react";

const SoftCta = () => {
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
    <div
      ref={ctaRef}
      className={styles.softCta}
      onMouseMove={handleMouseMove}
    >
      <div className={styles.softCtaInner}>
        <h3>Ready to find your next piece?</h3>
        <NavLink to="shop" className={styles.softCtaButton}>
          Shop the collection
        </NavLink>
      </div>
    </div>
  );
};

export default SoftCta;
