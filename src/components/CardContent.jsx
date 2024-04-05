//import of images/icons
import doingArrowLeft from "../assets/doingToLeft.png";
import doingArrowRight from "../assets/doingToRight.png";
import doneArrow from "../assets/done.png";
import todoArrow from "../assets/todo.png";

//import styles from separate css stylesheet
import styles from "../styling/CardContent.module.css";

const CardContent = ({ handleMoveTask, modalShown, task, toggleModal }) => {
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
    <div className={styles.CardContent}>
      <div
        className={styles.text}
        onClick={!modalShown ? () => toggleModal(task) : null}
      >
        <h3>
          {task.task.length <= 30 ? task.task : `${task.task.slice(0, 30)}...`}
        </h3>
        <p>{task.date}</p>
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
        <div className={styles.arrowDiv}>
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
  );
};

export default CardContent;
