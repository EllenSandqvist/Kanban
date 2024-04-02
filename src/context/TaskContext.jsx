import { createContext, useEffect, useState } from "react";

const TaskContext = createContext({});

export const TaskProvider = ({ children }) => {
  // const [modalShown, setModalShown] = useState(false);
  // const [selectedTask, setSelectedTask] = useState({});

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

  // //function to toggle task modal
  // function toggleModal(task, columnName) {
  //   setModalShown(!modalShown);
  //   setSelectedTask({ ...task, columnName: columnName });
  // }

  // const submitEditedTask = (editedTask) => {
  //   setModalShown(false);
  //   switch (editedTask.columnName) {
  //     case "Todo":
  //       const updatedTodoTasks = todoTasks.map((todoTask) => {
  //         return todoTask.id === editedTask.id ? editedTask : todoTask;
  //       });
  //       setTodoTasks(updatedTodoTasks);
  //       break;
  //     case "Doing":
  //       const updatedDoingTasks = doingTasks.map((doingTask) => {
  //         return doingTask.id === editedTask.id ? editedTask : doingTask;
  //       });
  //       setDoingTasks(updatedDoingTasks);
  //       break;
  //     case "Done":
  //       const updatedDoneTasks = doneTasks.map((doneTask) => {
  //         return doneTask.id === editedTask.id ? editedTask : doneTask;
  //       });
  //       setDoneTasks(updatedDoneTasks);
  //       break;
  //     default:
  //       console.log("vet inte vad som ska uppdateras");
  //       break;
  //   }
  //   setSelectedTask(null);
  // };

  const handleDelete = (columnName, id) => {
    switch (columnName) {
      case "Todo":
        setTodoTasks(todoTasks.filter((todoTask) => todoTask.id !== id));
        break;
      case "Doing":
        setDoingTasks(doingTasks.filter((doingTask) => doingTask.id !== id));
        break;
      case "Done":
        setDoneTasks(doneTasks.filter((doneTask) => doneTask.id !== id));
        break;
      default:
        console.log("vet inte vad som ska deletas");
        break;
    }
    console.log(columnName);
  };

  return (
    <TaskContext.Provider
      value={{
        // modalShown,
        // setModalShown,
        // selectedTask,
        // setSelectedTask,
        // toggleModal,
        todoTasks,
        setTodoTasks,
        doingTasks,
        setDoingTasks,
        doneTasks,
        setDoneTasks,
        // submitEditedTask,
        handleDelete,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
