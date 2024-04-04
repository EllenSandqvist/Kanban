import { useContext } from "react";
import TaskContext from "../context/TaskContext";

//import of images/icons
import { IoTrash } from "react-icons/io5";

const DeleteButton = ({ modalShown, task, toggleModal }) => {
  const {
    todoTasks,
    setTodoTasks,
    doingTasks,
    setDoingTasks,
    doneTasks,
    setDoneTasks,
  } = useContext(TaskContext);

  const handleDelete = (task) => {
    switch (task.columnName) {
      case "Todo":
        setTodoTasks(todoTasks.filter((todoTask) => todoTask.id !== task.id));
        break;
      case "Doing":
        setDoingTasks(
          doingTasks.filter((doingTask) => doingTask.id !== task.id)
        );
        break;
      case "Done":
        setDoneTasks(doneTasks.filter((doneTask) => doneTask.id !== task.id));
        break;
      default:
        console.log("Something went wrong, can't find right task to delete");
        break;
    }
  };

  return (
    <button className="DeleteButton" type="button">
      <IoTrash
        onClick={() => {
          handleDelete(task);
          modalShown && toggleModal();
        }}
        tabIndex="0"
        aria-label={`delete ${task.task}`}
      />
    </button>
  );
};

export default DeleteButton;
