import { useProducts } from "../api/Api.jsx";
import styles from "./Featured.module.css";
import Loading from "./Loading.jsx";
import Error from "./Error.jsx";

export default function Featured() {
  const { products, error, loading } = useProducts();

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className={styles.featured}>
      <div className={styles.featuredInner}>
        <h2 className={styles.featuredHeading}>Featured Drop</h2>
        <div className={styles.featuredGrid}>
          {products.slice(0, 4).map((item) => (
            <div key={item.id} className={styles.featuredItem}>
              <img src={item.image} alt={item.title} />
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
