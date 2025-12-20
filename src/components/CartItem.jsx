import styles from './CartItem.module.css'

const CartItem = ({ item }) => {
    return (
        <div key={item.id} className={styles.cartItem}>
            {item.title}
        </div>
    )
}

export default CartItem