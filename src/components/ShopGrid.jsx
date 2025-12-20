import { useProducts } from "../api/Api.jsx";
import ProductCard from "./ProductCard.jsx";
import styles from "./ShopGrid.module.css";

const ShopGrid = () => {
  const { products, error, loading } = useProducts();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;
  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <div className={styles.grid}>
          {products.map((item) => (
            <ProductCard item={item} />

          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopGrid;
