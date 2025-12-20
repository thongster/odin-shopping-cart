import styles from "./LoadError.module.css";

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <div className={styles.state}>
          <span className={styles.spinner} />
          <p>Loading products…</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
