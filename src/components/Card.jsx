import { useContext, useState } from "react";
import CardContent from "./CardContent";
import TaskModal from "./TaskModal";
import doingArrowRight from "../assets/doingToRight.png";
import doingArrowLeft from "../assets/doingToLeft.png";
import todoArrow from "../assets/todo.png";
import doneArrow from "../assets/done.png";
import TaskContext from "../context/TaskContext";

const Card = ({ task }) => {
  const { handleMoveTask } = useContext(TaskContext);

  const [modalShown, setModalShown] = useState(false);
  const [selectedTask, setSelectedTask] = useState({});

  //function to toggle task modal
  function toggleModal(task) {
    setModalShown(!modalShown);
    setSelectedTask({ ...task });
  }
  return (
    <>
      <div
        className="task-card"
        onClick={!modalShown ? () => toggleModal(task) : null}
      >
        <div className="task-card-info">
          <CardContent task={task} />
        </div>

        <img
          role="button"
          title="Move task to Doing"
          className="Doing"
          src={
            task.columnName === "Todo"
              ? doingArrowRight
              : task.columnName === "Done"
              ? doingArrowLeft
              : ""
          }
          alt={
            task.columnName === "Todo"
              ? "Doing Arrow pointing Right"
              : task.columnName === "Done"
              ? "Doing Arrow pointing Left"
              : ""
          }
          style={{
            alignSelf: task.columnName === "Todo" ? "end" : "start",
          }}
          onClick={(e) => handleMoveTask(e, task)}
        />

        {task.columnName === "Doing" && (
          <div className="arrow-div">
            <img
              role="button"
              src={todoArrow}
              alt="todo arrow"
              className="Todo"
              title="Move task to Todo"
              onClick={(e) => handleMoveTask(e, task)}
            />

            <img
              role="button"
              src={doneArrow}
              alt="done arrow"
              className="Done"
              title="Move task to Done"
              onClick={(e) => handleMoveTask(e, task)}
            />
          </div>
        )}
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
