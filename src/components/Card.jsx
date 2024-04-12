import { useState } from "react";

//import of components
import CardContent from "./CardContent";
import TaskModal from "./TaskModal";

const Card = ({ atHomePage, handleTaskMove, task }) => {
  const [modalShown, setModalShown] = useState(false);
  const [selectedTask, setSelectedTask] = useState({});

  //toggle modal and set selectedTask
  function toggleModal(task) {
    setModalShown(!modalShown);
    setSelectedTask({ ...task });
  }

  return (
    <>
      <CardContent
        atHomePage={atHomePage}
        handleTaskMove={handleTaskMove}
        modalShown={modalShown}
        task={task}
        toggleModal={toggleModal}
      />
      {modalShown && (
        <TaskModal
          setModalShown={setModalShown}
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
          toggleModal={toggleModal}
        />
      )}
    </>
  );
};

export default Card;
