import styles from './CountCtrl.module.css'

const CountCtrl = ({ minusOne, count, setCount }) => {

    return (
          <div className={styles.count}>
            <button type="button" onClick={() => minusOne()}>
              -
            </button>
            <input
              type="number"
              min="0"
              aria-label="Quantity"
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
            <button type="button" onClick={() => setCount(Number(count + 1))}>
              +
            </button>
          </div>
    )
}

export default CountCtrl