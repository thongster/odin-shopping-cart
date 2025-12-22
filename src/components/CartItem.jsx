import { useState } from 'react'
import { useOutletContext } from 'react-router';
import styles from "./CartItem.module.css";

const CartItem = ({ item }) => {
  const { setCart, addToCart } = useOutletContext();
  const [count, setCount] = useState(0);

  const minusOne = () => {
    if (count === 0) {
      return;
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div key={item.id} className={styles.cartItem}>
        <img
            src={item.image}
            alt={item.title}
            className={styles.image}
        />
        <div className={styles.details}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.price}>${item.price.toFixed(2)}</p>
        </div>
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
            <button type="button" onClick={() => setCount(Number(count + 1))}>
              +
            </button>
          </div>
            <button
                type="button"
                className={styles.remove}
            >
                Remove
            </button>
    </div>
  );
};

export default CartItem;
