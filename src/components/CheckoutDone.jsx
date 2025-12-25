import styles from "./CheckoutDone.module.css";
import { useOutletContext } from "react-router";

const CheckoutDone = () => {
  const { cart } = useOutletContext();

  if (cart.length === 0) {
    return;
  }

  return (
    <div className={styles.checkoutDone}>
      <h4>Checkout complete!</h4>
      <p>This is a demo store — no real order was placed.</p>
    </div>
  );
};

export default CheckoutDone;
