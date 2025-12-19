import styles from "./Editorial.module.css";
import image from "../assets/neonstreet.png";

const Editorial = () => {
  return (
    <div className={styles.editorial}>
      <img src={image} alt="neon street" />
    </div>
  );
};

export default Editorial;
