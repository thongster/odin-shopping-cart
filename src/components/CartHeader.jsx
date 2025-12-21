import { useOutletContext } from "react-router";
import styles from './CartHeader.module.css'

const CartHeader = () => {
  const { cart } = useOutletContext();
  
  return (
    <div>
        
    </div>
  )
}

export default CartHeader