import { useOutletContext } from "react-router";
import styles from './CartBody.module.css'

const CartBody = () => {
  const { cart, setCart } = useOutletContext();
  
    return (
        <div className={styles.container}>
            <div className={styles.containerInner}>
                {cart.map((item) => (
                    <p>{item.title}</p>
                ))}
            </div>
        </div>
    )
}

export default CartBody