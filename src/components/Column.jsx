import { useState } from "react";
import ColumnHeading from "./ColumnHeading";
import Card from "./Card";
import AddTaskForm from "./AddTaskForm";

const Column = ({ columnName, tasks }) => {
  const [inputIsShown, setInputIsShown] = useState(false);

  function handleShowInput() {
    setInputIsShown(!inputIsShown);
  }

  return (
    <div className="column">
      <ColumnHeading columnName={columnName} />
      {tasks.map((task) => {
        return <Card key={task.id} columnName={columnName} task={task} />;
      })}

      {columnName === "Todo" && !inputIsShown ? (
        <button className="add-button" onClick={handleShowInput}>
          + New task
        </button>
      ) : (
        columnName === "Todo" &&
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
