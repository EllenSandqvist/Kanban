import { useContext } from "react";
import TaskContext from "../context/TaskContext";
import Column from "../components/Column";

const TodoPage = () => {
  const { todoTasks } = useContext(TaskContext);
  return (
    <main>
      <Column columnName="Todo" tasks={todoTasks} />
    </main>
  );
};

export default TodoPage;
