import { useContext } from "react";
import TaskContext from "../context/TaskContext";

//import of components
import Column from "../components/Column";

const DonePage = () => {
  const { doneTasks } = useContext(TaskContext);
  return (
    <main>
      <Column atHomePage={false} columnTitle="Done" tasks={doneTasks} />
    </main>
  );
};

export default DonePage;
