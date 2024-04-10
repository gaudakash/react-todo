import styles from "./Welcome.module.css";

const Welcome = ({ Errortask }) => {
  return (
    Errortask.length === 0 && (
      <h1 className={styles.Message}>Now Enjoy Your Day</h1>
    )
  );
};

export default Welcome;
