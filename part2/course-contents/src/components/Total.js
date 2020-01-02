import React from 'react';

const Total = ({ part1, part2, part3 }) => (
  <strong><p>
    total of {part1.exercises + part2.exercises + part3.exercises} exercises
  </p></strong>
);

export default Total;