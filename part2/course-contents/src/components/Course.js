import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total';

const Course = props => {
    const { name, parts } = props.course;
    const [part1, part2, part3] = parts;

    return (
        <div>
          <Header course={name} />
          <Content part1={part1} part2={part2} part3={part3} />
          <Total part1={part1} part2={part2} part3={part3} />
        </div>
      );
};

export default Course;