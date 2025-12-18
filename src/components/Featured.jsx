import { useProducts } from "../api/Api.jsx"
import styles from "./Featured.module.css";

export default function Featured() {
  const { products, error, loading } = useProducts();

  return (
    <div className={styles.featured}>
      <div className={styles.featuredInner}>
        <h2 className={styles.featuredHeading}>Featured Drop</h2>
        <div className={styles.featuredGrid}>
          <div className={styles.featuredItem}>
            {useProducts()}
          </div>
          <div className={styles.featuredItem}></div>
          <div className={styles.featuredItem}></div>
        </div>
      </div>
    </div>
  );
}
