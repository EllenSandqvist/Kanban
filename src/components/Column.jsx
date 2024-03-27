import React from "react";
import ColumnHeading from "./ColumnHeading";
import Card from "./Card";
import AddTaskForm from "./AddTaskForm";

const Column = ({
  columnName,
  tasks,
  newTaskInfo,
  setNewTaskInfo,
  newTaskTitle,
  setNewTaskTitle,
  handleAddTask,
  handleShowInput,
  inputIsShown,
  handleDelete,
  submitEditedTask,
  modalShown,
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
            newTaskInfo={newTaskInfo}
            setNewTaskInfo={setNewTaskInfo}
            newTaskTitle={newTaskTitle}
            setNewTaskTitle={setNewTaskTitle}
            handleAddTask={handleAddTask}
          />
        )
      )}
    </div>
  );
};

export default Column;
