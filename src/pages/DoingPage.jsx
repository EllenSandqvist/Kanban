import { useContext } from "react";
import TaskContext from "../context/TaskContext";

//import of components
import Column from "../components/Column";

const DoningPage = () => {
  const { doingTasks } = useContext(TaskContext);
  return (
    <main>
      <Column atHomePage={false} columnTitle="Doing" tasks={doingTasks} />
    </main>
  );
};

export default DoningPage;
