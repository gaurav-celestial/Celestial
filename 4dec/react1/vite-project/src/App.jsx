import Comp1 from "./components/Comp1.jsx";

import "./App.css";

import { TempContextProvider } from "./store/store";

function App() {
  console.log("app rendered");
  return (
    <>
      <TempContextProvider>
        <Comp1 />
      </TempContextProvider>
    </>
  );
}

export default App;
