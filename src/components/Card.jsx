import { useState } from "react";
import CardContent from "./CardContent";
import TaskModal from "./TaskModal";
import { MdOutlineOpenInFull } from "react-icons/md";

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
        <div className="task-card-info">
          <CardContent task={task} />
        </div>
        <button
          type="button"
          className="open-task-btn"
          onClick={!modalShown ? () => toggleModal(task) : null}
        >
          <MdOutlineOpenInFull />
        </button>
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
