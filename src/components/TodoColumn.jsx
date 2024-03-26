import React from "react";
import ColumnHeading from "./ColumnHeading";
import Card from "./Card";
import AddTaskForm from "./AddTaskForm";

const TodoColumn = ({
  todoTasks,
  newTask,
  setNewTask,
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
      <ColumnHeading columnName={"Todo"} />
      {todoTasks.map((todoTask) => {
        return (
          <Card
            key={todoTask.id}
            columnName={"Todo"}
            task={todoTask}
            handleDelete={handleDelete}
            submitEditedTask={submitEditedTask}
            modalShown={modalShown}
            toggleModal={toggleModal}
            selectedTask={selectedTask}
          />
        );
      })}

      {!inputIsShown ? (
        <button className="add-button" onClick={handleShowInput}>
          + New task
        </button>
      ) : (
        <AddTaskForm
          onClose={handleShowInput}
          newTask={newTask}
          setNewTask={setNewTask}
          handleAddTask={handleAddTask}
        />
      )}
    </div>
  );
};

export default TodoColumn;
