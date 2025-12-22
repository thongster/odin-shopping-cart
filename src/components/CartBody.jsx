import { useOutletContext, Link } from "react-router";
import styles from "./CartBody.module.css";
import CartItem from "./CartItem";

const CartBody = () => {
  const { cart } = useOutletContext();

  if (cart.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.containerInner}>
          <div className={styles.emptyCart}>
            <h3 className={styles.emptyTitle}>Your cart is empty</h3>
            <p className={styles.emptyText}>
              Browse the collection and add items to your cart.
            </p>

            <Link to="/shop" className={styles.emptyLink}>
              View all products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <div className={styles.cartMain}>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartBody;
