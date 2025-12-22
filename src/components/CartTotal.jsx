import styles from "./CartTotal.module.css";
import { useOutletContext } from "react-router";

const CartTotal = () => {
  const { cart } = useOutletContext();

  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <div className={styles.cartTotal}>
          <h3>Order Summary</h3>
          <div className={styles.summaryRows}>
            <div className={styles.row}>
              <span>Subtotal</span>
              <span>$—.—</span>
            </div>

            <div className={styles.row}>
              <span>Estimated Tax</span>
              <span>$—.—</span>
            </div>

            <div className={styles.row}>
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className={styles.divider} />

            <div className={`${styles.row} ${styles.total}`}>
              <span>Total</span>
              <span>$—.—</span>
            </div>

            <button className={styles.checkoutBtn}>
                Checkout
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
