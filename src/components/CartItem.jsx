import styles from "./CartItem.module.css";

const CartItem = ({ item }) => {
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
    </div>
  );
};

export default CartItem;
