import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}> {text} </button>
);

const Statistic = ({ text, number }) => (
  <p>
    {text}: {number}
  </p>
);

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const voteGood = () => setGood(good + 1);
  const voteNeutral = () => setNeutral(neutral + 1);
  const voteBad = () => setBad(bad + 1);

  return (
    <div>
      <Header text="give feedback" />
      <Button text="good" handleClick={voteGood} />
      <Button text="neutral" handleClick={voteNeutral} />
      <Button text="bad" handleClick={voteBad} />
      <Header text="statistics" />
      <Statistic text="good" number={good} />
      <Statistic text="neutral" number={neutral} />
      <Statistic text="bad" number={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
