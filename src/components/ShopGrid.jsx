import { useProducts } from "../api/Api.jsx";
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
            <div key={item.id} className={styles.shopItem}>
              <img src={item.image} alt={item.title} />
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>
              <div className={styles.form}>
                <form action="submit">
                    <div className={styles.count}>
                        <button>-</button>
                        <input type="number" min="1"/>
                        <button>+</button>
                    </div>
                    <button type="submit" className={styles.cartBtn}>Add to Cart</button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopGrid;
