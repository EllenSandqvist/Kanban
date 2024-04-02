import { useContext } from "react";
import TaskContext from "../context/TaskContext";
import Column from "../components/Column";

const DonePage = () => {
  const { doneTasks } = useContext(TaskContext);
  return (
    <main>
      <Column columnName="Done" tasks={doneTasks} />
    </main>
  );
};

export default DonePage;