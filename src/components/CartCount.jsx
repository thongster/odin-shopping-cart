import styles from "./CartCount.module.css";

const CartCount = ({ cart }) => {
  if (cart.length === 0) return null;

  return (
    <span className={styles.cartBadge}>
      {cart.length}
    </span>
  );
}

export default CartCount