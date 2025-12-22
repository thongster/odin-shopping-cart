import { useOutletContext } from "react-router";
import styles from "./CountCtrl.module.css";

const CountCtrl = ({ count, onChange }) => {
  
  const minusOne = () => {
    if (count === 0) {
      return;
    } else {
      onChange(Number(count - 1));
    }
  };

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
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <button type="button" onClick={() => onChange(Number(count + 1))}>
        +
      </button>
    </div>
  );
};

export default CountCtrl;
