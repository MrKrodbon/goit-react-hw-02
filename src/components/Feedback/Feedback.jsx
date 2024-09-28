import styles from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, total, positive }) => {
  return (
    <div className={styles.feedbackContainer}>
      <p className={styles.feedbackContent}>Good: {good}</p>
      <p className={styles.feedbackContent}>Neutral: {neutral}</p>
      <p className={styles.feedbackContent}>Bad: {bad}</p>
      <p className={styles.feedbackContent}>Total: {total}</p>
      <p className={styles.feedbackContent}>Positive: {positive}%</p>
    </div>
  );
};

export default Feedback;
