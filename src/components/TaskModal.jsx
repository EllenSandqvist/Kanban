import { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";

//import of components
import ColumnHeading from "./ColumnHeading";
import DeleteButton from "./DeleteButton";

//import of images/icons
import { IoClose } from "react-icons/io5";

const TaskModal = ({
  modalShown,
  setModalShown,
  selectedTask,
  setSelectedTask,
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
    setEditedTask(null);
    setModalShown(false);
  };

  return (
    <div className="TaskModal">
      <form className="TaskModal-content" onSubmit={handleSubmit}>
        <button
          type="button"
          className="button-close"
          onClick={() => toggleModal(null)}
        >
          <IoClose className="IoClose" />
        </button>
        <ColumnHeading columnTitle={selectedTask.columnName} />
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
    </div>
  );
};

export default TaskModal;
