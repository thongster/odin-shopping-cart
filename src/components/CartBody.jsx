import { useOutletContext } from "react-router";
import styles from './CartBody.module.css'
import CartItem from './CartItem'

const CartBody = () => {
  const { cart, setCart } = useOutletContext();
  
    return (
        <div className={styles.container}>
            <div className={styles.containerInner}>
                <div className={styles.cartMain}>
                    {cart.map((item) => (
                        <CartItem item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CartBody