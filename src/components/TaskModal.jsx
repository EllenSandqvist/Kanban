import { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";

//import of components
import TaskModalContent from "./TaskModalContent";

const TaskModal = ({
  modalShown,
  setModalShown,
  selectedTask,
  setSelectedTask,
  toggleModal,
}) => {
  const {
    todoTasks,
    setTodoTasks,
    doingTasks,
    setDoingTasks,
    doneTasks,
    setDoneTasks,
  } = useContext(TaskContext);

  const [editedTask, setEditedTask] = useState({
    ...selectedTask,
  });

  const handleEdit = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({
      ...prevTask,
      [name]: value,
      date: new Date().toLocaleDateString(),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitEditedTask(editedTask);
  };

  const submitEditedTask = (editedTask) => {
    switch (editedTask.columnName) {
      case "Todo":
        const updatedTodoTasks = todoTasks.map((todoTask) => {
          return todoTask.id === editedTask.id ? editedTask : todoTask;
        });
        setTodoTasks(updatedTodoTasks);
        break;
      case "Doing":
        const updatedDoingTasks = doingTasks.map((doingTask) => {
          return doingTask.id === editedTask.id ? editedTask : doingTask;
        });
        setDoingTasks(updatedDoingTasks);
        break;
      case "Done":
        const updatedDoneTasks = doneTasks.map((doneTask) => {
          return doneTask.id === editedTask.id ? editedTask : doneTask;
        });
        setDoneTasks(updatedDoneTasks);
        break;
      default:
        console.log("Can't find the right task to update");
        break;
    }
    setSelectedTask(null);
    setEditedTask(null);
    setModalShown(false);
  };

  return (
    <div className="TaskModal">
      <TaskModalContent
        columnTitle={selectedTask.columnName}
        editedTask={editedTask}
        handleEdit={handleEdit}
        onSubmit={handleSubmit}
        modalShown={modalShown}
        selectedTask={selectedTask}
        toggleModal={toggleModal}
      />
    </div>
  );
};

export default TaskModal;
