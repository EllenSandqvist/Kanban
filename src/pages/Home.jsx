import { useContext } from "react";
import TaskContext from "../context/TaskContext";
import Column from "../components/Column";

const Home = () => {
  const { todoTasks, doingTasks, doneTasks } = useContext(TaskContext);
  return (
    <main>
      <section className="kanban-section">
        <Column columnName="Todo" tasks={todoTasks} />
        <Column columnName="Doing" tasks={doingTasks} />
        <Column columnName="Done" tasks={doneTasks} />
      </section>
    </main>
  );
};

export default Home;
