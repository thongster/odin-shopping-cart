import styles from "./ShopHeader.module.css";

const ShopHeader = () => {
  return (
    <div className={styles.header}>
      <h2>Full Collection</h2>
      <p>Select quantities and add items to your cart.</p>
    </div>
  );
};

export default ShopHeader;
