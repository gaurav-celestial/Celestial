import Comp2 from "./Comp2";

export default function Comp1() {
  console.log("comp 1 rerender");

  return (
    <div>
      Comp1
      <Comp2 />
    </div>
  );
}
