import React from "react";
import { AppUI } from "./AppUi";
import { TodoProvider } from "../TodoContext";

const defaultTodos = [
  { text: "Learn JS", completed: true },
  { text: "Learn HTML", completed: false },
  { text: "Learn CSS", completed: true },
];

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
