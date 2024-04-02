import { useContext } from "react";
import TaskContext from "../context/TaskContext";
import Column from "../components/Column";

const Home = () => {
  const { todoTasks, doingTasks, doneTasks } = useContext(TaskContext);
  return (
    <main>
      <section className="kanban-section">
        <Column columnTitle="Todo" tasks={todoTasks} />
        <Column columnTitle="Doing" tasks={doingTasks} />
        <Column columnTitle="Done" tasks={doneTasks} />
      </section>
    </main>
  );
};

export default Home;
