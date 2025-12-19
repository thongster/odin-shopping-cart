import { useProducts } from "../api/Api.jsx";
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
          {products.slice(0, 4).map((item) => (
            <div key={item.id} className={styles.featuredItem}>
              <img src={item.image} alt={item.title} />
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemPrice}>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
