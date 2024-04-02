import { useState } from "react";
import ColumnHeading from "./ColumnHeading";
import Card from "./Card";
import AddTaskForm from "./AddTaskForm";

const Column = ({ columnTitle, tasks }) => {
  const [inputIsShown, setInputIsShown] = useState(false);

  function handleShowInput() {
    setInputIsShown(!inputIsShown);
  }

  return (
    <div className="column">
      <ColumnHeading columnTitle={columnTitle} />
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
