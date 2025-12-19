import { useProducts } from "../api/Api.jsx";
import styles from './ShopGrid.module.css'

const ShopGrid = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerInner}>
                <div className={styles.grid}>

                </div>
            </div>
        </div>
    )
}

export default ShopGrid