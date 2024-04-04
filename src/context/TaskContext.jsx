import { createContext, useEffect, useState } from "react";

const TaskContext = createContext({});

export const TaskProvider = ({ children }) => {
  const [todoTasks, setTodoTasks] = useState(
    JSON.parse(localStorage.getItem("todoTasklist")) || []
  );

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

  return (
    <TaskContext.Provider
      value={{
        todoTasks,
        setTodoTasks,
        doingTasks,
        setDoingTasks,
        doneTasks,
        setDoneTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
