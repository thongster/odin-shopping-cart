import styles from "./Featured.module.css";

export default function Featured() {
  return (
    <div className={styles.featured}>
      <div className={styles.featuredInner}>
        <h2 className={styles.featuredHeading}>Featured Drop</h2>
        <div className={styles.featuredGrid}>
          <div className={styles.featuredItem}></div>
          <div className={styles.featuredItem}></div>
          <div className={styles.featuredItem}></div>
        </div>
      </div>
    </div>
  );
}
