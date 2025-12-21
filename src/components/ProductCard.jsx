import { useOutletContext } from "react-router";
import { useState } from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ item }) => {
  const { setCart, addToCart } = useOutletContext();
  const [count, setCount] = useState(0);

  const minusOne = () => {
    if (count === 0) {
      return;
    } else {
      setCount(count - 1);
    }
  };

  const handleSubmit = (e, product) => {
    e.preventDefault();
    if (count === 0) {
      return;
    }

    let cartItem = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      count: count,
    };
    
    addToCart(cartItem)
  };

  return (
    <div className={styles.shopItem}>
      <img src={item.image} alt={item.title} />
      <h3 className={styles.itemTitle}>{item.title}</h3>
      <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>
      <div className={styles.form}>
        <form action="submit" onSubmit={(e) => handleSubmit(e, item)}>
          <div className={styles.count}>
            <button type="button" onClick={() => minusOne()}>
              -
            </button>
            <input
              type="number"
              min="0"
              aria-label="Quantity"
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
            <button type="button" onClick={() => setCount(count + 1)}>
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
