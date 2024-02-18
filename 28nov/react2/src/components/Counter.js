import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter.counter);
  const toggleCounterHandler = () => {};

  const handleIncrement = function () {
    dispatch(counterActions.increment());
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
