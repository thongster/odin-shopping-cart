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
            <img src={products[0].image} alt={products[0].title} />
            <h3 className={styles.itemTitle}>{products[0].title}</h3>
            <p className={styles.itemPrice}>{products[0].price}</p>
          </div>
          <div className={styles.featuredItem}>
            <img src={products[1].image} alt={products[1].title} />
            <h3 className={styles.itemTitle}>{products[1].title}</h3>
            <p className={styles.itemPrice}>{products[1].price}</p>
        </div>
          <div className={styles.featuredItem}>
            <img src={products[2].image} alt={products[2].title} />
            <h3 className={styles.itemTitle}>{products[2].title}</h3>
            <p className={styles.itemPrice}>{products[2].price}</p>
          </div>
          <div className={styles.featuredItem}>
            <img src={products[3].image} alt={products[3].title} />
            <h3 className={styles.itemTitle}>{products[3].title}</h3>
            <p className={styles.itemPrice}>{products[3].price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
