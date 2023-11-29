import { useState } from "react";
import "./App.css";
import Comp from "./components/Comp.jsx";
import Comp2 from "./components/Comp2.jsx";

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = function handleIncrement() {
    // setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <>
      <h1>Vite + React</h1>
      <p>{counter}</p>
      <Comp />
      <Comp2 />
      <button onClick={handleIncrement}>Click</button>
    </>
  );
}

export default App;
