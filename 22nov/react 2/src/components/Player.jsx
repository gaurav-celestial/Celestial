import { useState } from "react";
import { useRef } from "react";
import ResultModal from "./ResultModal";

export default function Player() {
  const playerName = useRef();
  const dialog = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
  }

  function handleAnotherClick() {
    dialog.current.open();
  }

  return (
    <>
      <ResultModal ref={dialog} result="lost" />
      <section id="player">
        <h2>
          Welcome {enteredPlayerName ? enteredPlayerName : "unknown entity"}
        </h2>
        <p>
          <input ref={playerName} type="text" />
          <button onClick={handleClick}>Set Name</button>
        </p>
      </section>
      <button onClick={handleAnotherClick}>Result</button>
    </>
  );
}
