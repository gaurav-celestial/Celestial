import { useContext } from "react";
import { TempContext } from "../store/store";
import Comp2 from "./Comp2";

export default function Comp1() {
  const { value, increment } = useContext(TempContext);
  console.log("comp1 render");
  console.log(value);

  return (
    <div>
      {/* {value}
      <button onClick={increment}>Increment</button> */}
      <Comp2 />
    </div>
  );
}
