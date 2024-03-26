import { useState } from "react";
import Column from "../components/Column";
import Header from "../components/Header";
import AddColumnForm from "./AddColumnForm";

function App() {
  const [boardColumns, setBoardColumns] = useState(["Todo", "Doing", "Done"]);
  const [inputIsShown, setInputIsShown] = useState(false);

  function handleShowInput() {
    setInputIsShown(!inputIsShown);
  }

  function handleAddColumn(event) {
    if (event.key === "Enter") {
      const newColumn = event.target.value;
      setBoardColumns((boardColumns) => [...boardColumns, newColumn]);
      setInputIsShown(false);
    }
  }

  function handleRemoveColumn(index) {
    const userConfirmed = confirm(
      "Vill du verkligen ta bort kolumn " + (index + 1) + "?"
    );

    if (!userConfirmed) {
      return;
    } else {
      setBoardColumns((boardColumns) =>
        boardColumns.filter((_, i) => index !== i)
      );
    }
  }

  return (
    <>
      <Header />
      <main>
        <section className="kanban-section">
          {boardColumns.map((boardColumn, index) => (
            <Column
              key={index}
              name={boardColumn}
              onRemoveColumn={() => handleRemoveColumn(index)}
            />
          ))}
        </section>
        {/* Conditional rendering of add-button and input field */}
        {inputIsShown ? (
          <AddColumnForm
            onClick={handleShowInput}
            onKeyDown={handleAddColumn}
          />
        ) : (
          <button className="add-button" onClick={handleShowInput}>
            + Add new Column
          </button>
        )}
      </main>
    </>
  );
}

export default App;
