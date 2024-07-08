import { useState } from "react";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";

    }));
  };

  const resetFeedbacks = () => {
    setFeedbacks({ good: 0, neutral: 0, bad: 0 });
  };
  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positiveFeedbackPercentage = totalFeedback > 0 ? Math.round((feedbacks.good / totalFeedback) * 100) : 0;

  return (
    <>
      <Description />
      <Options
        onFeedback={updateFeedback}
        onReset={resetFeedbacks}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback feedbacks={feedbacks} totalFeedback={totalFeedback} positiveFeedbackPercentage={positiveFeedbackPercentage} />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </>
  );
};

export default App;
