import styles from "./ProductAdded.module.css";


const ProductAdded = ({ isAdded }) => {
  return <div className={`${styles.productAdded} ${isAdded ? styles.show : ""}`}>something here</div>;
};

export default ProductAdded;
