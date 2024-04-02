import { useState } from "react";
import CardContent from "./CardContent";
import TaskModal from "./TaskModal";
import DeleteButton from "./DeleteButton";

const Card = ({ task }) => {
  const [modalShown, setModalShown] = useState(false);
  const [selectedTask, setSelectedTask] = useState({});

  //function to toggle task modal
  function toggleModal(task) {
    setModalShown(!modalShown);
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
          modalShown={modalShown}
          toggleModal={toggleModal}
        />
      </div>
      {modalShown && (
        <TaskModal
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
          modalShown={modalShown}
          setModalShown={setModalShown}
          toggleModal={toggleModal}
        />
      )}
    </>
  );
};

export default Card;
