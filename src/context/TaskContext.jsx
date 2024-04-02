import { createContext, useEffect, useState } from "react";

const TaskContext = createContext({});

export const TaskProvider = ({ children }) => {
  const [todoTasks, setTodoTasks] = useState(
    JSON.parse(localStorage.getItem("todoTasklist")) || []
  );

  //* Todo: Hårdkodat, ska tömmas sedan!
  const [doingTasks, setDoingTasks] = useState(
    JSON.parse(localStorage.getItem("doingTasklist")) || [
      {
        id: "10",
        date: new Date().toLocaleDateString(),
        task: "First Doing",
        info: "Testar hårdkodad Doing",
        columnName: "Doing",
      },
      {
        id: "11",
        date: new Date().toLocaleDateString(),
        task: "Second Doing",
        info: "Testar hårdkod nr 2",
        columnName: "Doing",
      },
    ]
  );
  const [doneTasks, setDoneTasks] = useState(
    JSON.parse(localStorage.getItem("doneTasklist")) || [
      {
        id: "15",
        date: new Date().toLocaleDateString(),
        task: "First Done",
        info: "Testar hårdkodad Done",
        columnName: "Done",
      },
      {
        id: "16",
        date: new Date().toLocaleDateString(),
        task: "Second Done",
        info: "Testar hårdkod nr 3",
        columnName: "Done",
      },
    ]
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
