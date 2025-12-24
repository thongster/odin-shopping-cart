import styles from "./CartTotal.module.css";
import { useState } from "react";
import { useOutletContext } from "react-router";
import CheckoutDone from "./CheckoutDone";

const CartTotal = () => {
  const { cart } = useOutletContext();
  const [isCheckout, setIsCheckout] = useState(false)

  const subtotal = Number(
    cart
      .map((item) => item.count * item.price)
      .reduce((a, b) => a + b, 0)
      .toFixed(2),
  );
  const tax = Number((subtotal * 0.05).toFixed(2));
  const total = Number(subtotal + tax).toFixed(2);

  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <div className={styles.cartTotal}>
          <h3>Order Summary</h3>
          <div className={styles.summaryRows}>
            <div className={styles.row}>
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>

            <div className={styles.row}>
              <span>Tax 5%</span>
              <span>${tax}</span>
            </div>

            <div className={styles.row}>
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className={styles.divider} />

            <div className={`${styles.row} ${styles.total}`}>
              <span>Total</span>
              <span>${total}</span>
            </div>

            <button className={styles.checkoutBtn} onClick={() => setIsCheckout(true)}>Checkout</button>

            {isCheckout && <CheckoutDone />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
