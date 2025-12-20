import styles from './LoadError.module.css';

const Error = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerInner}>
                <div className={styles.state}>
                <span className={styles.spinner} />
                <p>Something went wrong.</p>
                </div>
            </div>
        </div>
    )
}

export default Error