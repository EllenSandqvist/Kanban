import { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";
import { IoClose } from "react-icons/io5";

const AddTaskForm = ({ onClose, setInputIsShown }) => {
  const { todoTasks, setTodoTasks } = useContext(TaskContext);

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskInfo, setNewTaskInfo] = useState("");

  //handle add new task, clear input and hide input field
  const handleAddTask = (e) => {
    e.preventDefault();
    const myNewTask = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      task: newTaskTitle,
      info: newTaskInfo,
      columnName: "Todo",
    };
    const newTaskList = [...todoTasks, myNewTask];
    setTodoTasks(newTaskList);
    setNewTaskTitle("");
    setNewTaskInfo("");
    setInputIsShown(false);
  };

  return (
    <div className="AddTaskModal">
      <form className="AddTaskModal-content" onSubmit={handleAddTask}>
        <button type="button" className="button-close" onClick={onClose}>
          <IoClose className="IoClose" />
        </button>
        <label
          htmlFor="new-task"
          aria-label="Enter new task"
          className="label-hidden"
        ></label>

        <input
          name="task"
          type="text"
          autoFocus
          className="AddTaskModal-heading"
          id="new-task"
          placeholder="New task..."
          required
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <label
          htmlFor="task-info"
          aria-label="Additional task info"
          className="label-hidden"
        ></label>
        <textarea
          name="info"
          id="task-info"
          className="AddTaskModal-info"
          placeholder="Task info..."
          cols="50"
          rows="5"
          value={newTaskInfo}
          onChange={(e) => setNewTaskInfo(e.target.value)}
        ></textarea>
        <button type="submit" className="add-button">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTaskForm;
