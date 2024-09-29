import styles from "./Options.module.css";

const Options = ({ totalFeedback, setFeedback, resetFeedback }) => {
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
        <button
          className={styles.SendBtn}
          onClick={() => resetFeedback("reset")}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
