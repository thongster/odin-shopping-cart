import { useProducts } from "../api/Api.jsx";
import ProductCard from "./ProductCard.jsx";
import styles from "./ShopGrid.module.css";
import Loading from "./Loading.jsx";
import Error from "./Error.jsx";

const ShopGrid = () => {
  const { products, error, loading } = useProducts();
  if (loading) return <Loading />;
  if (error) return <Error />;
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
