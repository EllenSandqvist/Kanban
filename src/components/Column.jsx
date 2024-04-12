import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";

//import of components
import ColumnHeading from "./ColumnHeading";
import Card from "./Card";
import AddTaskModal from "./AddTaskModal";

//import of images/icons
import { IoClose } from "react-icons/io5";

//import styles from separate css stylesheet
import styles from "../styling/Column.module.css";

const Column = ({ atHomePage, columnTitle, tasks }) => {
  const { setTodoTasks, setDoingTasks, setDoneTasks } = useContext(TaskContext);
  const [inputIsShown, setInputIsShown] = useState(false);

  function handleShowInput() {
    setInputIsShown(!inputIsShown);
  }

  // --- DRAG AND DROP SECTION  ---
  //default is that data can't be dropped in other elements
  function allowDrop(e) {
    e.preventDefault();
  }

  //getting the dragged data, converting the stringified task object back to js
  function drop(e) {
    e.preventDefault();
    const movedTask = JSON.parse(e.dataTransfer.getData("movedTask"));
    var fromColumn = e.dataTransfer.getData("fromColumn");

    //getting target column from the column h2
    const targetColumn = e.target.querySelector("h2").textContent;

    handleTaskMove(e, fromColumn, targetColumn, movedTask);
  }

  // --- FUNCTIONALITY TO MOVE TASK ----
  function handleTaskMove(e, fromColumn, targetColumn, movedTask) {
    if (e.target.classList.contains("add-button")) {
      return;
    }

    if (fromColumn === targetColumn) {
      return;
    }

    //uppdating moved task with new columnName
    const updatedTask = { ...movedTask, columnName: targetColumn };

    handleRemoveTask(fromColumn, movedTask);
    handleIncludeTask(targetColumn, updatedTask);
  }

  function handleRemoveTask(fromColumn, movedTask) {
    switch (fromColumn) {
      case "Todo":
        setTodoTasks((prevTasks) =>
          prevTasks.filter((todoTask) => todoTask.id !== movedTask.id)
        );
        break;
      case "Doing":
        setDoingTasks((prevTasks) =>
          prevTasks.filter((doingTask) => doingTask.id !== movedTask.id)
        );
        break;
      case "Done":
        setDoneTasks((prevTasks) =>
          prevTasks.filter((doneTask) => doneTask.id !== movedTask.id)
        );
        break;
      default:
        break;
    }
  }

  function handleIncludeTask(targetColumn, updatedTask) {
    switch (targetColumn) {
      case "Todo":
        setTodoTasks((prevTasks) => [...prevTasks, updatedTask]);
        break;
      case "Doing":
        setDoingTasks((prevTasks) => [...prevTasks, updatedTask]);
        break;
      case "Done":
        setDoneTasks((prevTasks) => [...prevTasks, updatedTask]);
        break;
      default:
        break;
    }
  }

  return (
    <div
      className={styles.Column}
      onDragOver={(e) => allowDrop(e)}
      onDrop={(e) => drop(e)}
      key={columnTitle}
    >
      <ColumnHeading columnTitle={columnTitle} />
      {!atHomePage && (
        <Link className="button-close" to="/">
          <IoClose role="button" />
        </Link>
      )}
      {tasks.map((task) => {
        return (
          <Card
            key={task.id}
            task={task}
            handleTaskMove={handleTaskMove}
            atHomePage={atHomePage}
          />
        );
      })}

      {columnTitle === "Todo" && !inputIsShown ? (
        <button className="add-button" onClick={handleShowInput}>
          + New task
        </button>
      ) : (
        columnTitle === "Todo" &&
        inputIsShown && (
          <AddTaskModal
            handleShowInput={handleShowInput}
            setInputIsShown={setInputIsShown}
          />
        )
      )}
    </div>
  );
};

export default Column;
