import { useContext } from "react";
import TaskContext from "../context/TaskContext";

//import of components
import Column from "../components/Column";

const Home = () => {
  const { todoTasks, doingTasks, doneTasks } = useContext(TaskContext);
  return (
    <main>
      <section className="kanban-section">
        <Column atHomePage={true} columnTitle="Todo" tasks={todoTasks} />
        <Column atHomePage={true} columnTitle="Doing" tasks={doingTasks} />
        <Column atHomePage={true} columnTitle="Done" tasks={doneTasks} />
      </section>
    </main>
  );
};

export default Home;
