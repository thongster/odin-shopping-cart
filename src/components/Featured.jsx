import { useProducts } from "../api/Api.jsx"
import styles from "./Featured.module.css";

export default function Featured() {
  const { products, error, loading } = useProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <div className={styles.featured}>
      <div className={styles.featuredInner}>
        <h2 className={styles.featuredHeading}>Featured Drop</h2>
        <div className={styles.featuredGrid}>
          <div className={styles.featuredItem}>
            
            {products[0].title}
          </div>
          <div className={styles.featuredItem}></div>
          <div className={styles.featuredItem}></div>
        </div>
      </div>
    </div>
  );
}
