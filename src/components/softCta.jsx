import styles from './softCta.module.css'

const softCta = () => {


    return (
        <div className={styles.softCta}>
            <div className={styles.softCtaInner}>
                <h3>Ready to find your next piece?</h3>
                <a href="/shop" className={styles.softCtaButton}>
                Shop the collection
                </a>
            </div>
        </div>
    )
}

export default softCta