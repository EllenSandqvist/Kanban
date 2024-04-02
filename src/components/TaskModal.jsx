import { useContext, useState } from "react";
import { IoClose } from "react-icons/io5";
import TaskContext from "../context/TaskContext";
import ColumnHeading from "./ColumnHeading";
import DeleteButton from "./DeleteButton";

const TaskModal = ({
  selectedTask,
  setSelectedTask,
  modalShown,
  setModalShown,
  toggleModal,
}) => {
  const {
    todoTasks,
    setTodoTasks,
    doingTasks,
    setDoingTasks,
    doneTasks,
    setDoneTasks,
  } = useContext(TaskContext);

  const [editedTask, setEditedTask] = useState({
    ...selectedTask,
  });

  const handleEdit = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({
      ...prevTask,
      [name]: value,
      date: new Date().toLocaleDateString(),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitEditedTask(editedTask);
  };

  const submitEditedTask = (editedTask) => {
    switch (editedTask.columnName) {
      case "Todo":
        const updatedTodoTasks = todoTasks.map((todoTask) => {
          return todoTask.id === editedTask.id ? editedTask : todoTask;
        });
        setTodoTasks(updatedTodoTasks);
        break;
      case "Doing":
        const updatedDoingTasks = doingTasks.map((doingTask) => {
          return doingTask.id === editedTask.id ? editedTask : doingTask;
        });
        setDoingTasks(updatedDoingTasks);
        break;
      case "Done":
        const updatedDoneTasks = doneTasks.map((doneTask) => {
          return doneTask.id === editedTask.id ? editedTask : doneTask;
        });
        setDoneTasks(updatedDoneTasks);
        break;
      default:
        console.log("Can't find the right task to update");
        break;
    }
    setSelectedTask(null);
    setModalShown(false);
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
        <ColumnHeading columnTitle={selectedTask.columnName} />
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
