import { useOutletContext } from "react-router";
import { useState, useEffect } from "react";
import styles from "./ProductCard.module.css";
import CountCtrl from "./CountCtrl";
import ProductAdded from "./ProductAdded";

const ProductCard = ({ item }) => {
  const { addToCart } = useOutletContext();
  const [count, setCount] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  const handleSubmit = (e, product) => {
    e.preventDefault();
    if (count === 0) {
      return;
    }

    let cartItem = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      count: count,
    };

    addToCart(cartItem);
    setIsAdded(true)
  };

  useEffect(() => {
    if (!setIsAdded) return;

    const timer = setTimeout(() => {
      setIsAdded(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isAdded]);

  return (
    <div className={styles.shopItem}>
      <img src={item.image} alt={item.title} />
      <h3 className={styles.itemTitle}>{item.title}</h3>
      <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>
      <div className={styles.form}>
        <form action="submit" onSubmit={(e) => handleSubmit(e, item)}>
          <CountCtrl count={count} onChange={setCount} />
          <button type="submit" className={styles.cartBtn} onClick={() => onAdd()}>
            Add to Cart
          </button>
        </form>
      </div>
      {isAdded && <ProductAdded isAdded={isAdded}/>}
    </div>
  );
};

export default ProductCard;
