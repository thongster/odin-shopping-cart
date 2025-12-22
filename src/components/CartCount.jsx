import styles from "./CartCount.module.css";

const CartCount = ({ cart }) => {
  if (cart.length === 0) return null;

  const allSum = cart.map((item) => item.count).reduce((a, b) => a + b, 0)

  return (
    <span className={styles.cartBadge}>
      {allSum}
    </span>
  );
}

export default CartCount