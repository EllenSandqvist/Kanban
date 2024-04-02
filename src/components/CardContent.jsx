import React from "react";

const CardContent = ({ task }) => {
  return (
    <>
      <h3>
        {task.task.length <= 30 ? task.task : `${task.task.slice(0, 30)}...`}
      </h3>
      <p>{task.date}</p>
    </>
  );
};

export default CardContent;
