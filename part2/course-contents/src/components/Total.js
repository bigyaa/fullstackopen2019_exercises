import React from "react";

const Total = ({ parts }) => {
  const exercises = parts.map(part=>part.exercises);
  
  const total = exercises.reduce((sum, currentValue) => {
    return sum + currentValue;
  });

  return (
    <strong>
      <p>
        total of {total} exercises
      </p>
    </strong>
  );
};

export default Total;
