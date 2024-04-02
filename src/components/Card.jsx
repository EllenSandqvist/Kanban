import { useState } from "react";
// import TaskContext from "../context/TaskContext";
import CardContent from "./CardContent";
import TaskModal from "./TaskModal";
import DeleteButton from "./DeleteButton";

const Card = ({ columnName, task }) => {
  const [modalShown, setModalShown] = useState(false);
  const [selectedTask, setSelectedTask] = useState({});

  //function to toggle task modal
  function toggleModal(task) {
    setModalShown(!modalShown);
    console.log("columnName i toggleModal: " + task.columnName);
    setSelectedTask({ ...task });
  }
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
          task={task}
          columnName={columnName}
          toggleModal={toggleModal}
        />
      </div>
      {modalShown && (
        <TaskModal
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
          setModalShown={setModalShown}
          toggleModal={toggleModal}
        />
      )}
    </>
  );
};

export default Card;
