import { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";

//import of components
import CardContent from "./CardContent";
import TaskModal from "./TaskModal";

//import of images/icons
import doingArrowLeft from "../assets/doingToLeft.png";
import doingArrowRight from "../assets/doingToRight.png";
import doneArrow from "../assets/done.png";
import todoArrow from "../assets/todo.png";

const Card = ({ task }) => {
  const {
    todoTasks,
    setTodoTasks,
    doingTasks,
    setDoingTasks,
    doneTasks,
    setDoneTasks,
  } = useContext(TaskContext);

  const [modalShown, setModalShown] = useState(false);
  const [selectedTask, setSelectedTask] = useState({});

  //toggle modal and set selectedTask
  function toggleModal(task) {
    setModalShown(!modalShown);
    setSelectedTask({ ...task });
  }

  const handleMoveTask = (e, task) => {
    const updatedTask = { ...task, columnName: e.target.className };

    switch (task.columnName) {
      case "Todo":
        setTodoTasks(todoTasks.filter((todoTask) => todoTask.id !== task.id));
        const newDoingList = [...doingTasks, updatedTask];
        setDoingTasks(newDoingList);
        break;
      case "Doing":
        setDoingTasks(
          doingTasks.filter((doingTask) => doingTask.id !== task.id)
        );
        if (e.target.className === "Todo") {
          const newTaskList = [...todoTasks, updatedTask];
          setTodoTasks(newTaskList);
          break;
        } else {
          const newTaskList = [...doneTasks, updatedTask];
          setDoneTasks(newTaskList);
          break;
        }
      case "Done":
        setDoneTasks(doneTasks.filter((doneTask) => doneTask.id !== task.id));
        const newTaskList = [...doingTasks, updatedTask];
        setDoingTasks(newTaskList);
        break;

      default:
        console.log("Can't find right task to move");
        break;
    }
  };

  //img variables with different values depending on column
  const arrowSrc =
    task.columnName === "Todo"
      ? doingArrowRight
      : task.columnName === "Done"
      ? doingArrowLeft
      : "";
  const arrowAlt =
    task.columnName === "Todo"
      ? "Doing arrow pointing right"
      : task.columnName === "Done"
      ? "Doing arrow pointing left"
      : "";

  return (
    <>
      <div
        className="Card"
        onClick={!modalShown ? () => toggleModal(task) : null}
      >
        <div className="CardContent">
          <CardContent task={task} />
        </div>

        <img
          role="button"
          title="Move task to Doing"
          className="Doing"
          src={arrowSrc}
          alt={arrowAlt}
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
          modalShown={modalShown}
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
