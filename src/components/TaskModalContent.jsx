//import of components
import ColumnHeading from "./ColumnHeading";
import DeleteButton from "./DeleteButton";

//import of images/icons
import { IoClose } from "react-icons/io5";

const TaskModalContent = ({
  columnTitle,
  editedTask,
  handleEdit,
  onSubmit,
  modalShown,
  selectedTask,
  toggleModal,
}) => {
  return (
    <form className="TaskModal-content" onSubmit={onSubmit}>
      <button
        type="button"
        className="button-close"
        onClick={() => toggleModal(null)}
      >
        <IoClose className="IoClose" />
      </button>
      <ColumnHeading columnTitle={columnTitle} />
      <label
        htmlFor="editTaskName"
        aria-label="Edit task name"
        className="label-hidden"
      ></label>
      <input
        type="text"
        className="TaskModal-heading editable"
        id="editTaskName"
        name="task"
        value={editedTask.task}
        onChange={handleEdit}
      />
      <p>{selectedTask.date}</p>
      <label
        htmlFor="editTaskInfo"
        aria-label="Edit task info"
        className="label-hidden"
      ></label>
      <textarea
        className="TaskModal-info editable"
        id="editTaskInfo"
        name="info"
        rows={8}
        value={editedTask.info}
        onChange={handleEdit}
      />
      <div className="TaskModal-buttons">
        <button type="submit" className="add-button">
          Save
        </button>
        <DeleteButton
          modalShown={modalShown}
          task={selectedTask}
          toggleModal={toggleModal}
        />
      </div>
    </form>
  );
};

export default TaskModalContent;
