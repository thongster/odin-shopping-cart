import styles from "./ProductAdded.module.css";

const ProductAdded = ({ isAdded }) => {
  console.log("isAdded:", isAdded);
  return (
    <div className={`${styles.productAdded} ${isAdded ? styles.show : ""}`}>
        <h4>Added to cart</h4>
        <p>Item was added successfully</p>
    </div>
  );
};

export default ProductAdded;
