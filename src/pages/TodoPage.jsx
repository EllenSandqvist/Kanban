import { useContext } from "react";
import TaskContext from "../context/TaskContext";

//import of components
import Column from "../components/Column";

const TodoPage = () => {
  const { todoTasks } = useContext(TaskContext);
  return (
    <main>
      <Column atHomePage={false} columnTitle="Todo" tasks={todoTasks} />
    </main>
  );
};

export default TodoPage;
