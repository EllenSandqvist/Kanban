import { useContext } from "react";
import TaskContext from "../context/TaskContext";

//import of images/icons
import { IoTrash } from "react-icons/io5";

//import styles from separate css stylesheet
import styles from "../styling/DeleteButton.module.css";

const DeleteButton = ({ task, toggleModal }) => {
  const { setTodoTasks, setDoingTasks, setDoneTasks } = useContext(TaskContext);

  const handleDelete = (task) => {
    switch (task.columnName) {
      case "Todo":
        setTodoTasks((prevTasks) => [
          ...prevTasks.filter((todoTask) => todoTask.id !== task.id),
        ]);
        break;
      case "Doing":
        setDoingTasks((prevTasks) => [
          ...prevTasks.filter((doingTask) => doingTask.id !== task.id),
        ]);
        break;
      case "Done":
        setDoneTasks((prevTasks) => [
          ...prevTasks.filter((doneTask) => doneTask.id !== task.id),
        ]);
        break;
      default:
        console.log("Something went wrong, can't find right task to delete");
        break;
    }
  };

  return (
    <button className={styles.DeleteButton} type="button">
      <IoTrash
        onClick={() => {
          handleDelete(task);
          toggleModal();
        }}
        tabIndex="0"
        aria-label={`delete ${task.task}`}
      />
    </button>
  );
};

export default DeleteButton;
