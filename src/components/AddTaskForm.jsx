import { IoClose } from "react-icons/io5";

const AddTaskForm = ({
  onClose,
  newTaskInfo,
  setNewTaskInfo,
  newTaskTitle,
  setNewTaskTitle,
  handleAddTask,
}) => {
  return (
    <div className="modal modal-bg-new-task">
      <form className="form-add-task modal-content" onSubmit={handleAddTask}>
        <button type="button" className="button-close" onClick={onClose}>
          <IoClose />
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
          className="new-task-input"
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
          className="new-task-details"
          placeholder="Additional task info..."
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
