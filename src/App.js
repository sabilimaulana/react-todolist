import React from "react";
import "./styles.css";

import Paper from "./components/Paper";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

export default function App() {
  return (
    <Paper>
      <Header />
      <TodoForm />
      <Todos />
    </Paper>

    // <div className="App">
    //   <h1>Hello CodeSandbox</h1>
    //   <h2>Start editing to see some magic happen!</h2>
    // </div>
  );
}
