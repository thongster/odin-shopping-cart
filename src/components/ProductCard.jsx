import styles from "./ProductCard.module.css";

const ProductCard = ({item}) => {

    return (

            <div key={item.id} className={styles.shopItem}>
              <img src={item.image} alt={item.title} />
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>
              <div className={styles.form}>
                <form action="submit">
                    <div className={styles.count}>
                        <button type="button">-</button>
                        <input type="number" min="1" aria-label="Quantity"/>
                        <button type="button">+</button>
                    </div>
                    <button type="submit" className={styles.cartBtn}>Add to Cart</button>
                </form>
              </div>
            </div>
    )
}

export default ProductCard