import styles from "./Options.module.css";

const Options = ({ totalFeedback, setFeedback }) => {
  return (
    <div className={styles.btnContainer}>
      <button className={styles.SendBtn} onClick={() => setFeedback("good")}>
        Good
      </button>
      <button className={styles.SendBtn} onClick={() => setFeedback("neutral")}>
        Neutral
      </button>
      <button className={styles.SendBtn} onClick={() => setFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={styles.SendBtn} onClick={() => setFeedback("reset")}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
