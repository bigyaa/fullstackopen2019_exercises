import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}> {text} </button>
);

const Statistic = ({ text, number, type }) => (
  <p>
    {text}: {number} {type === "percentage" ? "%" : ""}
  </p>
);

const Statistics = ({
  good,
  bad,
  neutral,
  average,
  total,
  positive,
  feedback
}) =>
  feedback ? (
    <>
      <Statistic text="good" number={good} />
      <Statistic text="neutral" number={neutral} />
      <Statistic text="bad" number={bad} />
      <Statistic text="all" number={total} />
      <Statistic text="average" number={average} />
      <Statistic text="positive" number={positive || 0} type="percentage" />
    </>
  ) : (
    "No feedback given"
  );

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [feedback, setFeedback] = useState(false);
  const [goodFlag, neutralFlag, badFlag] = [1, 0, -1];

  const total = good + neutral + bad;

  const average =
    (good * goodFlag + neutral * neutralFlag + bad * badFlag) / total || 0;

  const positive = (good / total) * 100;

  const voteGood = () => {
    setGood(good + 1);
    setFeedback(true);
  };

  const voteNeutral = () => {
    setNeutral(neutral + 1);
    setFeedback(true);
  };

  const voteBad = () => {
    setBad(bad + 1);
    setFeedback(true);
  };

  return (
    <div>
      <Header text="give feedback" />
      <Button text="good" handleClick={voteGood} />
      <Button text="neutral" handleClick={voteNeutral} />
      <Button text="bad" handleClick={voteBad} />
      <Header text="statistics" />
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        total={total}
        average={average}
        positive={positive}
        feedback={feedback}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
