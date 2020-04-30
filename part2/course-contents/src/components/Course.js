import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";
import Footer from "./Footer";

const Course = props => {
  const { name, parts } = props.course;

  return (
    <div>
      <Header course={name} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer />
    </div>
  );
};

export default Course;
