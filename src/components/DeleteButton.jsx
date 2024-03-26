import { IoTrash } from "react-icons/io5";

const DeleteButton = ({
  handleDelete,
  task,
  columnName,
  modalShown,
  toggleModal,
}) => {
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
