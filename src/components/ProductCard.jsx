import { useOutletContext } from "react-router";
import styles from "./ProductCard.module.css";

const ProductCard = ({ item }) => {
  const { cart, setCart } = useOutletContext();

  const minusOne = (selectedItem) => {
    console.log(selectedItem)
  };

  const plusOne = (selectedItem) => {
    console.log(selectedItem)
  };

  const handleSubmit = (selectedItem) => {

  };

  return (
    <div className={styles.shopItem}>
      <img src={item.image} alt={item.title} />
      <h3 className={styles.itemTitle}>{item.title}</h3>
      <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>
      <div className={styles.form}>
        <form action="submit" onSubmit={handleSubmit(item)}>
          <div className={styles.count}>
            <button type="button" onClick={() => minusOne(item)}>
              -
            </button>
            <input type="number" min="1" aria-label="Quantity" />
            <button type="button" onClick={() => plusOne(item)}>
              +
            </button>
          </div>
          <button type="submit" className={styles.cartBtn}>
            Add to Cart
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductCard;
