import { useState } from "react";
import { IoClose } from "react-icons/io5";
import ColumnHeading from "./ColumnHeading";
import DeleteButton from "./DeleteButton";

const TaskModal = ({
  columnName,
  toggleModal,
  selectedTask,
  handleDelete,
  modalShown,
  submitEditedTask,
}) => {
  const [editedTask, setEditedTask] = useState({
    id: selectedTask.id,
    date: selectedTask.date,
    task: selectedTask.task,
    info: selectedTask.info,
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
    <div className="modal modal-hidden">
      <form className="modal-content" onSubmit={handleSubmit}>
        <button
          type="button"
          className="button-close"
          onClick={() => toggleModal(selectedTask)}
        >
          <IoClose />
        </button>
        <ColumnHeading columnName={columnName} />
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
          defaultValue={selectedTask.info}
          onChange={handleEdit}
        />
        <DeleteButton
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
