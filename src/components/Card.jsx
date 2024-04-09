import { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";

//import of components
import CardContent from "./CardContent";
import TaskModal from "./TaskModal";

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
        setTodoTasks((prevTasks) =>
          prevTasks.filter((todoTask) => todoTask.id !== task.id)
        );
        const newDoingList = [...doingTasks, updatedTask];
        setDoingTasks(newDoingList);
        break;
      case "Doing":
        setDoingTasks((prevTasks) =>
          prevTasks.filter((doingTask) => doingTask.id !== task.id)
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
        setDoneTasks((prevTasks) =>
          prevTasks.filter((doneTask) => doneTask.id !== task.id)
        );
        const newTaskList = [...doingTasks, updatedTask];
        setDoingTasks(newTaskList);
        break;

      default:
        console.log("Can't find right task to move");
        break;
    }
  };

  return (
    <>
      <CardContent
        task={task}
        handleMoveTask={handleMoveTask}
        modalShown={modalShown}
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
