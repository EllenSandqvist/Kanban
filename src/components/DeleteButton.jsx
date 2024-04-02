import { useContext } from "react";
import TaskContext from "../context/TaskContext";
import { IoTrash } from "react-icons/io5";

const DeleteButton = ({ task, columnName, modalShown, toggleModal }) => {
  const {
    todoTasks,
    setTodoTasks,
    doingTasks,
    setDoingTasks,
    doneTasks,
    setDoneTasks,
  } = useContext(TaskContext);

  const handleDelete = (columnName, id) => {
    switch (columnName) {
      case "Todo":
        setTodoTasks(todoTasks.filter((todoTask) => todoTask.id !== id));
        break;
      case "Doing":
        setDoingTasks(doingTasks.filter((doingTask) => doingTask.id !== id));
        break;
      case "Done":
        setDoneTasks(doneTasks.filter((doneTask) => doneTask.id !== id));
        break;
      default:
        console.log("vet inte vad som ska deletas");
        break;
    }
  };

  return (
    <button className="trash" type="button">
      <IoTrash
        onClick={() => {
          handleDelete(columnName, task.id);
          modalShown && toggleModal();
        }}
        tabIndex="0"
        aria-label={`delete ${task.task}`}
      />
    </button>
  );
};

export default DeleteButton;
