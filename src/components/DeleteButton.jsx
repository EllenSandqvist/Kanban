import { useContext } from "react";
import TaskContext from "../context/TaskContext";
import { IoTrash } from "react-icons/io5";

const DeleteButton = ({ task, columnName, toggleModal }) => {
  const { handleDelete, modalShown } = useContext(TaskContext);
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
