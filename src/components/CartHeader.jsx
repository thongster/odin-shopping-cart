import { useOutletContext } from "react-router";
import styles from "./CartHeader.module.css";

const CartHeader = () => {
  const { clearCart } = useOutletContext();

  return (
    <div className={styles.header}>
      <div className={styles.titleGroup}>
        <h2>Your Cart</h2>
        <p>Review items before checkout.</p>
      </div>

      <button onClick={() => clearCart()}>Clear</button>
    </div>
  );
};

export default CartHeader;
