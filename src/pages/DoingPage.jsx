import { useContext } from "react";
import TaskContext from "../context/TaskContext";
import Column from "../components/Column";

const DoningPage = () => {
  const { doingTasks } = useContext(TaskContext);
  return (
    <main>
      <Column columnName="Doing" tasks={doingTasks} />
    </main>
  );
};

export default DoningPage;
