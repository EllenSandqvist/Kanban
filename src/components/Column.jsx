import React from "react";
import ColumnHeading from "./ColumnHeading";
import Card from "./Card";
import AddTaskForm from "./AddTaskForm";

const Column = ({
  columnName,
  tasks,
  newTask,
  setNewTask,
  handleAddTask,
  handleShowInput,
  inputIsShown,
  handleDelete,
  submitEditedTask,
  modalShown,
  // setModalShown,
  toggleModal,
  selectedTask,
}) => {
  return (
    <div className="column">
      <ColumnHeading columnName={columnName} />
      {tasks.map((task) => {
        return (
          <Card
            key={task.id}
            columnName={columnName}
            task={task}
            handleDelete={handleDelete}
            submitEditedTask={submitEditedTask}
            modalShown={modalShown}
            // setModalShown={setModalShown}
            toggleModal={toggleModal}
            selectedTask={selectedTask}
          />
        );
      })}

      {columnName === "Todo" && !inputIsShown ? (
        <button className="add-button" onClick={handleShowInput}>
          + New task
        </button>
      ) : (
        columnName === "Todo" &&
        inputIsShown && (
          <AddTaskForm
            onClose={handleShowInput}
            newTask={newTask}
            setNewTask={setNewTask}
            handleAddTask={handleAddTask}
          />
        )
      )}
    </div>
  );
};

export default Column;
