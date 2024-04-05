import { Link } from "react-router-dom";
import { useState } from "react";

//import of components
import ColumnHeading from "./ColumnHeading";
import Card from "./Card";
import AddTaskModal from "./AddTaskModal";

//import of images/icons
import { IoClose } from "react-icons/io5";

//import styles from separate css stylesheet
import styles from "../styling/Column.module.css";

const Column = ({ atHomePage, columnTitle, tasks }) => {
  const [inputIsShown, setInputIsShown] = useState(false);

  function handleShowInput() {
    setInputIsShown(!inputIsShown);
  }

  return (
    <div className={styles.Column}>
      <ColumnHeading columnTitle={columnTitle} />
      {!atHomePage && (
        <Link className="button-close" to="/">
          <IoClose role="button" />
        </Link>
      )}
      {tasks.map((task) => {
        return <Card key={task.id} task={task} />;
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
