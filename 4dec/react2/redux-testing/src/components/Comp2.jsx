import { useSelector, useDispatch } from "react-redux";

export default function Comp2() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleClick = function () {
    dispatch({ type: "increment" });
  };

  console.log("comp 2 rerender");

  return (
    <div>
      {count}
      <button onClick={handleClick}>Increment</button>
      Comp2
    </div>
  );
}
