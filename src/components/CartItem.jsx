import { useOutletContext } from "react-router";
import styles from "./CartItem.module.css";
import CountCtrl from "./CountCtrl";

const CartItem = ({ item }) => {
  const { setCart, removeFromCart, updateQty } = useOutletContext();

  return (
    <div className={styles.cartItem}>
      <img src={item.image} alt={item.title} className={styles.image} />
      <div className={styles.details}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.price}>${item.price.toFixed(2)}</p>
      </div>
      <div className={styles.countctrl}>
        <CountCtrl
          count={item.count}
          onChange={(newCount) => updateQty(item, newCount)}
        />
      </div>
      <button
        type="button"
        className={styles.remove}
        onClick={() => removeFromCart(item)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
