import { useContext } from "react";
import TaskContext from "../context/TaskContext";
import Column from "../components/Column";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const DonePage = () => {
  const { doneTasks } = useContext(TaskContext);
  return (
    <main>
      <Column columnTitle="Done" tasks={doneTasks} />
      <Link className="close-link" to="/">
        <IoClose />
      </Link>
    </main>
  );
};

export default DonePage;
