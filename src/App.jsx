import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedGood = window.localStorage.getItem("good");
    const savedNeutral = window.localStorage.getItem("neutral");
    const savedBad = window.localStorage.getItem("bad");

    return {
      good: savedGood ? parseInt(savedGood) : 0,
      neutral: savedNeutral ? parseInt(savedNeutral) : 0,
      bad: savedBad ? parseInt(savedBad) : 0,
    };
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

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
          return {
            ...prevFeedbackType,
            good: 0,
            neutral: 0,
            bad: 0,
          };
        default:
          return { prevFeedbackType };
      }
    });
  };

  useEffect(() => {
    window.localStorage.setItem("good", feedback.good);
    window.localStorage.setItem("neutral", feedback.neutral);
    window.localStorage.setItem("bad", feedback.bad);
  }, [feedback]);
  return (
    <>
      <Description />
      <Options setFeedback={updateFeedback} totalFeedback={totalFeedback} />
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
