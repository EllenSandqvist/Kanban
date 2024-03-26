import React from "react";

const CardContent = ({ task }) => {
  return (
    <>
      <h3>{task.task}</h3>
      <p>{task.date}</p>
    </>
  );
};

export default CardContent;
