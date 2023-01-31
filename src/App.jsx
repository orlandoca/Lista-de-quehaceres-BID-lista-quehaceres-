import { useState } from "react";
import Task from "./components/task";
import "./App.css";

function App() {
  const [task, setTask] = useState([]);
  const [controllerInput, setControllerInput] = useState("");

  function AddTask() {
    console.log(task);
    setTask([controllerInput, ...task]);
  }

  return (
    <div className="App">
      <div>
        <section className="section-main">
          <input
            value={controllerInput}
            onChange={(i) => setControllerInput(i.target.value)}
            type="text"
            placeholder="ingresar tarea"
          />
          <button onClick={AddTask}>Add</button>
        </section>
        <section className="section-list">
          {task.map((e, id) => {
            return <Task key={id + 1} name={e} />;
          })}
        </section>
      </div>
    </div>
  );
}

export default App;
