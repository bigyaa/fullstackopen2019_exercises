import React from "react";
import ReactDOM from "react-dom";

const Header = ({ course }) => <h1>{course}</h1>;
const Part = ({name, exercises}) => console.log(name)||(
  <p>
    {name} {exercises}
  </p>
);
const Content = ({part1, part2, part3}) => (
  <>
    <Part part1={part1} />
    <Part part2={part2} />
    <Part part3={part3} />
  </>
);

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7
  };
  const part3 = {
    name: "State of a component",
    exercises: 14
  };

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      {/* <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
