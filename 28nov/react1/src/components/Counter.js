import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);
  const toggleCounterHandler = () => {};

  const handleIncrement = function () {
    dispatch({ type: "increment" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <p>{counter}</p>
      <button onClick={handleIncrement}>+</button>
      <div className={classes.value}>-- COUNTER VALUE --</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
