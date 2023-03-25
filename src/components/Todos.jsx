import React from "react";
import { TodoItem } from "./TodoItem";

const Todos = (props) => {
  return (
    <div className="container" style={{ minHeight: "80vh" }}>
      <h2 className="my-2">Todo list</h2>
      {props.todos.length === 0
        ? "Nothing to display"
        : props.todos.map((todo) => {
            return (
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};

export default Todos;