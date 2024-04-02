import { useContext } from "react";
import TaskContext from "../context/TaskContext";
import Column from "../components/Column";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const TodoPage = () => {
  const { todoTasks } = useContext(TaskContext);
  return (
    <main>
      <Column columnTitle="Todo" tasks={todoTasks} />
      <Link className="close-link" to="/">
        <IoClose />
      </Link>
    </main>
  );
};

export default TodoPage;
