import { createStore } from "redux";

const initialState = {
  count: 0,
};

const countReducer = function (state = initialState, action) {
  if (action.type === "increment") {
    return { ...state, count: state.count + 1 };
  }

  return state;
};

export const store = createStore(countReducer);
