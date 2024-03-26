import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoColumn from "./components/TodoColumn";
import DoingColumn from "./components/DoingColumn";
import DoneColumn from "./components/DoneColumn";

function App() {
  // states;
  const [todoTasks, setTodoTasks] = useState(
    JSON.parse(localStorage.getItem("todoTasklist")) || []
  );
  const [doingTasks, setDoingTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  const [newTask, setNewTask] = useState({
    id: "null",
    date: "",
    task: "",
    info: "",
  });
  const [selectedTask, setSelectedTask] = useState(null);

  //states for modals
  const [inputIsShown, setInputIsShown] = useState(false);
  const [modalShown, setModalShown] = useState(false);

  useEffect(() => {
    localStorage.setItem("todoTasklist", JSON.stringify(todoTasks));
  }, [todoTasks]);

  //function to toggle add-task input
  function handleShowInput() {
    setInputIsShown(!inputIsShown);
  }

  //function to toggle task modal
  function toggleModal(task) {
    setModalShown(!modalShown);
    setSelectedTask(task);
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

  //handle edited task
  const submitEditedTask = (editedTask) => {
    updateTask(editedTask);
    setModalShown(false);
  };

  const updateTask = (editedTask) => {
    const updatedTodoTasks = todoTasks.map((todoTask) => {
      return todoTask.id === editedTask.id ? editedTask : todoTask;
    });
    setTodoTasks(updatedTodoTasks);
  };

  //* todo - make function work for all types of tasks...
  const handleDelete = (columnName, id) => {
    switch (columnName) {
      case "Todo":
        setTodoTasks(todoTasks.filter((todoTask) => todoTask.id !== id));
        break;
      case "Doing":
        console.log("doing task ska deletas");
        break;
      case "Done":
        console.log("done task ska deletas");
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
          <TodoColumn
            todoTasks={todoTasks}
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
          <DoingColumn
            todoTasks={todoTasks}
            doingTasks={doingTasks}
            setDoingTasks={setDoingTasks}
            handleDelete={handleDelete}
            submitEditedTask={submitEditedTask}
            modalShown={modalShown}
            toggleModal={toggleModal}
          />
          <DoneColumn
            todoTasks={todoTasks}
            doneTasks={doneTasks}
            setDoneTasks={setDoneTasks}
            handleDelete={handleDelete}
            submitEditedTask={submitEditedTask}
            modalShown={modalShown}
            toggleModal={toggleModal}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
