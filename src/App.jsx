import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Column from "./components/Column";

function App() {
  // states;
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
      },
      {
        id: "11",
        date: new Date().toLocaleDateString(),
        task: "Second Doing",
        info: "Testar hårdkod nr 2",
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
      },
      {
        id: "16",
        date: new Date().toLocaleDateString(),
        task: "Second Done",
        info: "Testar hårdkod nr 3",
      },
    ]
  );

  const [newTask, setNewTask] = useState({
    id: "null",
    date: "",
    task: "",
    info: "",
  });

  const [selectedTask, setSelectedTask] = useState({
    id: null,
    date: "",
    task: "",
    info: "",
    columnName: "",
  });

  //states for modals
  const [inputIsShown, setInputIsShown] = useState(false);
  const [modalShown, setModalShown] = useState(false);

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

  //function to toggle add-task input
  function handleShowInput() {
    setInputIsShown(!inputIsShown);
  }

  //function to toggle task modal
  function toggleModal(task, columnName) {
    console.log("columnName in toggleModal:", columnName);
    setModalShown(!modalShown);
    setSelectedTask({ ...task, columnName: columnName });
  }

  //handle add new task, clear input and hide input field
  const handleAddTask = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
    setInputIsShown(false);
  };

  const addTask = (task) => {
    const id = todoTasks.length ? todoTasks[todoTasks.length - 1].id + 1 : 1;
    const myNewTask = {
      id,
      date: new Date().toLocaleDateString(),
      task: task.task,
      info: task.info,
    };
    const newTaskList = [...todoTasks, myNewTask];
    setTodoTasks(newTaskList);
  };

  const submitEditedTask = (editedTask) => {
    setModalShown(false);
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
        console.log("vet inte vad som ska uppdateras");
        break;
    }
    setSelectedTask(null);
  };

  //* todo - make function work for all types of tasks...
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
    <>
      <Header />
      <main>
        <section className="kanban-section">
          <Column
            columnName="Todo"
            tasks={todoTasks}
            newTask={newTask}
            setNewTask={setNewTask}
            handleAddTask={handleAddTask}
            handleShowInput={handleShowInput}
            inputIsShown={inputIsShown}
            handleDelete={handleDelete}
            submitEditedTask={submitEditedTask}
            modalShown={modalShown}
            toggleModal={toggleModal}
            selectedTask={selectedTask}
          />
          <Column
            columnName="Doing"
            tasks={doingTasks}
            handleDelete={handleDelete}
            submitEditedTask={submitEditedTask}
            modalShown={modalShown}
            toggleModal={toggleModal}
            selectedTask={selectedTask}
          />
          <Column
            columnName="Done"
            tasks={doneTasks}
            handleDelete={handleDelete}
            submitEditedTask={submitEditedTask}
            modalShown={modalShown}
            toggleModal={toggleModal}
            selectedTask={selectedTask}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
