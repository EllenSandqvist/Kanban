import CardContent from "./CardContent";
import TaskModal from "./TaskModal";
import DeleteButton from "./DeleteButton";

const Card = ({
  columnName,
  task,
  handleDelete,
  submitEditedTask,
  modalShown,
  toggleModal,
  selectedTask,
}) => {
  return (
    <>
      <div className="task-card">
        <div
          className="task-card-info"
          onClick={!modalShown ? () => toggleModal(task) : null}
        >
          <CardContent task={task} />
        </div>
        <DeleteButton
          handleDelete={handleDelete}
          task={task}
          columnName={columnName}
          modalShown={modalShown}
          toggleModal={toggleModal}
        />
      </div>
      {modalShown && (
        <TaskModal
          columnName={columnName}
          toggleModal={toggleModal}
          selectedTask={selectedTask}
          handleDelete={handleDelete}
          modalShown={modalShown}
          submitEditedTask={submitEditedTask}
        />
      )}
    </>
  );
};

export default Card;
