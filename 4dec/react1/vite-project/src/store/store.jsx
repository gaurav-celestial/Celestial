import { createContext, useState } from "react";

export const TempContext = createContext({
  value: 0,
  increment: () => {},
});

export function TempContextProvider({ children }) {
  const [value, setValue] = useState(0);

  function increment() {
    setValue((prevState) => prevState + 1);
  }

  const val = {
    value,
    increment,
  };

  return <TempContext.Provider value={val}>{children}</TempContext.Provider>;
}
