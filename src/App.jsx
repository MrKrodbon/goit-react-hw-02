import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Options from "./components/Options/Options.jsx";
import Notification from "./components/Notification/Notification.jsx";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedbacks = window.localStorage.getItem("feedback");

    if (savedFeedbacks !== null) {
      return JSON.parse(savedFeedbacks);
    } else {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    }
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const resetFeedback = (feedbackType) => {
    setFeedback((feedbackToReset) => {
      if (feedbackType === "reset") {
        return {
          ...feedbackToReset,
          good: 0,
          neutral: 0,
          bad: 0,
        };
      }
    });
  };

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedbackType) => {
      switch (feedbackType) {
        case "good":
          return {
            ...prevFeedbackType,
            good: prevFeedbackType.good + 1,
          };
        case "neutral":
          return {
            ...prevFeedbackType,
            neutral: prevFeedbackType.neutral + 1,
          };
        case "bad":
          return {
            ...prevFeedbackType,
            bad: prevFeedbackType.bad + 1,
          };
        case "reset":
          resetFeedback(prevFeedbackType);
          break;
        default:
          return prevFeedbackType;
      }
    });
  };

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);
  return (
    <>
      <Description />
      <Options
        setFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      )}
    </>
  );
}

export default App;
