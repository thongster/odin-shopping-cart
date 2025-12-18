import styles from './Values.module.css'

export default function Values() {
    return (
        <div className={styles.values}>
            <div className={styles.valuesInner}>
                <h2 className={styles.valuesHeading}>Designed with intention.</h2>
                <div className={styles.valuesGrid}>
                    <div className={styles.valuesItem}>
                        <h3 className={styles.itemTitle}>Curated Drops</h3>
                        <p className={styles.itemText}>Handpicked pieces inspired by city nights, neon signs, and sidewalk culture.</p>
                    </div>
                    <div className={styles.valuesItem}>
                        <h3 className={styles.itemTitle}>Quality First</h3>
                        <p className={styles.itemText}>Premium materials and limited runs — made to be worn, not collected.</p>
                    </div>
                    <div className={styles.valuesItem}>
                        <h3 className={styles.itemTitle}>Built for the Streets</h3>
                        <p className={styles.itemText}>Designed to layer, move, and hold up to real city life.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}