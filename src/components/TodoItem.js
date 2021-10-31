import React from "react";
import "./TodoItem.css";
import Checkbox from "@material-ui/core/Checkbox";

function TodoItem({ name, done, id }) {
  const handleCheck = () => {};
  return (
    <div className="todoItem">
      <Checkbox checked={done} onChange={handleCheck} />
      <p className={done && "todoItem--done"}>{name}</p>
    </div>
  );
}

export default TodoItem;
