import { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";

//import of components
import AddTaskForm from "./AddTaskForm";

//import styles from separate css stylesheet
import styles from "../styling/AddTask.module.css";

const AddTaskModal = ({ handleShowInput, setInputIsShown }) => {
  const { todoTasks, setTodoTasks } = useContext(TaskContext);

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskInfo, setNewTaskInfo] = useState("");

  //handle add new task, clear input and hide input field
  const handleAddTask = (e) => {
    e.preventDefault();
    const myNewTask = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      task: newTaskTitle,
      info: newTaskInfo,
      columnName: "Todo",
    };
    const newTaskList = [...todoTasks, myNewTask];
    setTodoTasks(newTaskList);
    setNewTaskTitle("");
    setNewTaskInfo("");
    setInputIsShown(false);
  };

  return (
    <div className={styles.AddTaskModal}>
      <AddTaskForm
        handleAddTask={handleAddTask}
        newTaskInfo={newTaskInfo}
        newTaskTitle={newTaskTitle}
        onClose={handleShowInput}
        setNewTaskInfo={setNewTaskInfo}
        setNewTaskTitle={setNewTaskTitle}
      />
    </div>
  );
};

export default AddTaskModal;
