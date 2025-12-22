import styles from "./CartCount.module.css";

const CartCount = ({ cart }) => {

    return (
        <div>
            {cart.length}
        </div>
    )
}

export default CartCount