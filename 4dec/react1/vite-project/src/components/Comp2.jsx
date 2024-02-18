import { useContext } from "react";
import { TempContext } from "../store/store";

export default function Comp2() {
  const { value, increment } = useContext(TempContext);
  console.log("comp2 rendered");

  return (
    <div>
      {value}
      <button onClick={increment}>Increment</button>
    </div>
  );
}
