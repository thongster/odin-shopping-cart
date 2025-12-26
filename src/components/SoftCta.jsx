import styles from './softCta.module.css'
import { NavLink } from 'react-router'

const SoftCta = () => {


    return (
        <div className={styles.softCta}>
            <div className={styles.softCtaInner}>
                <h3>Ready to find your next piece?</h3>
                <NavLink to="shop" className={styles.softCtaButton}>
                Shop the collection
                </NavLink>
            </div>
        </div>
    )
}

export default SoftCta