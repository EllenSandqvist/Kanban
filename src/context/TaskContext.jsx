import { createContext, useEffect, useState } from "react";

const TaskContext = createContext({});

export const TaskProvider = ({ children }) => {
  const [todoTasks, setTodoTasks] = useState(
    JSON.parse(localStorage.getItem("todoTasklist")) || []
  );

  //* Todo: Hårdkodat, ska tömmas sedan!
  const [doingTasks, setDoingTasks] = useState(
    JSON.parse(localStorage.getItem("doingTasklist")) || []
  );
  const [doneTasks, setDoneTasks] = useState(
    JSON.parse(localStorage.getItem("doneTasklist")) || []
  );

  //Save todoTasks to localStorage
  useEffect(() => {
    localStorage.setItem("todoTasklist", JSON.stringify(todoTasks));
  }, [todoTasks]);

  //Save doingTasks to localStorage
  useEffect(() => {
    localStorage.setItem("doingTasklist", JSON.stringify(doingTasks));
  }, [doingTasks]);

  //Save doneTasks to localStorage
  useEffect(() => {
    localStorage.setItem("doneTasklist", JSON.stringify(doneTasks));
  }, [doneTasks]);

  const handleMoveTask = (e, task) => {
    const updatedTask = { ...task, columnName: e.target.className };

    switch (task.columnName) {
      case "Todo":
        setTodoTasks(todoTasks.filter((todoTask) => todoTask.id !== task.id));
        const newDoingList = [...doingTasks, updatedTask];
        setDoingTasks(newDoingList);
        break;
      case "Doing":
        setDoingTasks(
          doingTasks.filter((doingTask) => doingTask.id !== task.id)
        );
        if (e.target.className === "Todo") {
          const newTaskList = [...todoTasks, updatedTask];
          setTodoTasks(newTaskList);
          break;
        } else {
          const newTaskList = [...doneTasks, updatedTask];
          setDoneTasks(newTaskList);
          break;
        }
      case "Done":
        setDoneTasks(doneTasks.filter((doneTask) => doneTask.id !== task.id));
        const newTaskList = [...doingTasks, updatedTask];
        setDoingTasks(newTaskList);
        break;

      default:
        console.log("Can't find right task to move");
        break;
    }
  };

  return (
    <TaskContext.Provider
      value={{
        todoTasks,
        setTodoTasks,
        doingTasks,
        setDoingTasks,
        doneTasks,
        setDoneTasks,
        handleMoveTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
