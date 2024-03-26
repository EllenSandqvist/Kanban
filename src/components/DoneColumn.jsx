import React from "react";
import ColumnHeading from "./ColumnHeading";

const DoneColumn = (
  doneTasks,
  setDoneTasks,
  handleDelete,
  setEditedTask,
  submitEditedTask,
  modalShown,
  toggleModal
) => {
  return (
    <div className="column">
      <ColumnHeading columnName={"Done"} />
    </div>
  );
};

export default DoneColumn;
