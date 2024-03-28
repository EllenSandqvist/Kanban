import { useContext } from "react";
import TaskContext from "../context/TaskContext";
import ColumnHeading from "./ColumnHeading";
import Card from "./Card";
import AddTaskForm from "./AddTaskForm";

const Column = ({ columnName, tasks }) => {
  const { handleShowInput, inputIsShown } = useContext(TaskContext);
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
        inputIsShown && <AddTaskForm onClose={handleShowInput} />
      )}
    </div>
  );
};

export default Column;
