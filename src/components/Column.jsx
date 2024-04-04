import { Link } from "react-router-dom";
import { useState } from "react";

//import of components
import ColumnHeading from "./ColumnHeading";
import Card from "./Card";
import AddTaskForm from "./AddTaskModal";

//import of images/icons
import { IoClose } from "react-icons/io5";

const Column = ({ atHomePage, columnTitle, tasks }) => {
  const [inputIsShown, setInputIsShown] = useState(false);

  function handleShowInput() {
    setInputIsShown(!inputIsShown);
  }

  return (
    <div className="Column">
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
          <AddTaskForm
            onClose={handleShowInput}
            setInputIsShown={setInputIsShown}
          />
        )
      )}
    </div>
  );
};

export default Column;
