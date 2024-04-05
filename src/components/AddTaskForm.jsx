//import of images/icons
import { IoClose } from "react-icons/io5";

const AddTaskForm = ({
  handleAddTask,
  newTaskInfo,
  newTaskTitle,
  onClose,
  setNewTaskInfo,
  setNewTaskTitle,
}) => {
  return (
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
  );
};

export default AddTaskForm;
