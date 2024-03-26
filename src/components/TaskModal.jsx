import { useState } from "react";
import { IoClose } from "react-icons/io5";
import ColumnHeading from "./ColumnHeading";
import DeleteButton from "./DeleteButton";

const TaskModal = ({
  toggleModal,
  selectedTask,
  handleDelete,
  modalShown,
  submitEditedTask,
}) => {
  const [editedTask, setEditedTask] = useState({
    ...selectedTask,
  });

  const handleEdit = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitEditedTask(editedTask);
  };

  return (
    <div className="modal">
      <form className="modal-content" onSubmit={handleSubmit}>
        <button
          type="button"
          className="button-close"
          onClick={() => toggleModal(null)}
        >
          <IoClose />
        </button>
        <ColumnHeading columnName={selectedTask.columnName} />
        <input
          type="text"
          className="modal-task-heading editable"
          name="task"
          value={editedTask.task}
          onChange={handleEdit}
        />
        <p>{selectedTask.date}</p>
        <textarea
          className="modal-task-info editable"
          name="info"
          rows={8}
          value={editedTask.info}
          onChange={handleEdit}
        />
        <DeleteButton
          columnName={selectedTask.columnName}
          handleDelete={handleDelete}
          task={selectedTask}
          modalShown={modalShown}
          toggleModal={toggleModal}
        />
        <button type="submit" className="add-button">
          Save
        </button>
      </form>
    </div>
  );
};

export default TaskModal;
