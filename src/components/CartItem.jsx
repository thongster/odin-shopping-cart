import { useState } from "react";
import { useOutletContext } from "react-router";
import styles from "./CartItem.module.css";
import CountCtrl from "./CountCtrl";

const CartItem = ({ item }) => {
  const { setCart, addToCart, removeFromCart } = useOutletContext();
  const [count, setCount] = useState(0);

  return (
    <div key={item.id} className={styles.cartItem}>
      <img src={item.image} alt={item.title} className={styles.image} />
      <div className={styles.details}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.price}>${item.price.toFixed(2)}</p>
      </div>
      <CountCtrl count={count} setCount={setCount} />
      <button type="button" className={styles.remove} onClick={() => removeFromCart(item)}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
