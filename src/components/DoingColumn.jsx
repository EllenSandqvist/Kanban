import React from "react";
import ColumnHeading from "./ColumnHeading";
import Card from "./Card";

const DoingColumn = ({
  todoTask,
  doingTasks,
  // setDoingTasks,
  handleDelete,
  setEditedTask,
  submitEditedTask,
  modalShown,
  toggleModal,
  selectedTask,
}) => {
  return (
    <div className="column">
      <ColumnHeading columnName={"Doing"} />
    </div>
  );
};

export default DoingColumn;
