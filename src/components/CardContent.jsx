//import of images/icons
import doingArrowLeft from "../assets/doingToLeft.png";
import doingArrowRight from "../assets/doingToRight.png";
import doneArrow from "../assets/done.png";
import todoArrow from "../assets/todo.png";
import { ImEnlarge2 } from "react-icons/im";

//import styles from separate css stylesheet
import styles from "../styling/CardContent.module.css";

const CardContent = ({
  atHomePage,
  handleTaskMove,
  modalShown,
  task,
  toggleModal,
}) => {
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

  // --- DRAG AND DROP SECTION  ---
  // function that sets what data should be avaible when dropped.
  //To bring the whole task object in the move it first needs to be stringified
  function drag(e, column) {
    e.dataTransfer.setData("movedTask", JSON.stringify(task));
    e.dataTransfer.setData("fromColumn", column);
  }

  //setting draggable = true makes the div draggable
  //when drag starts function drag(....) is called
  return (
    <div
      className={styles.CardContent}
      //conditional rendering so that element is only draggable in Homepage (when all columns are shown)
      draggable={atHomePage ? true : false}
      onDragStart={(e) => drag(e, task.columnName)}
      id={task.id}
    >
      <div className={`${styles.text} ${atHomePage ? "grab" : ""}`}>
        <h3>
          {task.task.length <= 30 ? task.task : `${task.task.slice(0, 30)}...`}
        </h3>
        <p>{task.date}</p>
      </div>
      <button className={styles.enlarge}>
        <ImEnlarge2 onClick={!modalShown ? () => toggleModal(task) : null} />
      </button>

      <img
        role="button"
        title="Move task to Doing"
        className="Doing"
        src={arrowSrc}
        alt={arrowAlt}
        style={{
          alignSelf: task.columnName === "Todo" ? "end" : "start",
        }}
        onClick={(e) =>
          handleTaskMove(e, task.columnName, e.target.className, task)
        }
      />

      {task.columnName === "Doing" && (
        <div className={styles.arrowDiv}>
          <img
            role="button"
            src={todoArrow}
            alt="todo arrow"
            className="Todo"
            title="Move task to Todo"
            onClick={(e) =>
              handleTaskMove(e, task.columnName, e.target.className, task)
            }
          />

          <img
            role="button"
            src={doneArrow}
            alt="done arrow"
            className="Done"
            title="Move task to Done"
            onClick={(e) =>
              handleTaskMove(e, task.columnName, e.target.className, task)
            }
          />
        </div>
      )}
    </div>
  );
};

export default CardContent;
