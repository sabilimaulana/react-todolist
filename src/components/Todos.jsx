import React from "react";

import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "Belajar React"
    },
    {
      text: "Belajar State"
    },
    {
      text: "Belajar Hooks"
    },
    {
      text: "Belajar Props"
    },
    {
      text: "Belajar React lallalalalla"
    }
  ];

  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
      {/* <Todo text="Belajar props di React" /> */}
    </section>
  );
};

export default Todos;
