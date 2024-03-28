import { useContext } from "react";
import TaskContext from "../context/TaskContext";
import CardContent from "./CardContent";
import TaskModal from "./TaskModal";
import DeleteButton from "./DeleteButton";

const Card = ({ columnName, task }) => {
  const { modalShown, toggleModal } = useContext(TaskContext);
  return (
    <>
      <div className="task-card">
        <div
          className="task-card-info"
          onClick={!modalShown ? () => toggleModal(task, columnName) : null}
        >
          <CardContent task={task} />
        </div>
        <DeleteButton
          task={task}
          columnName={columnName}
          toggleModal={toggleModal}
        />
      </div>
      {modalShown && <TaskModal />}
    </>
  );
};

export default Card;
