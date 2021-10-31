import React, { useState } from "react";

import "./Input.css";

import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";

function Input() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodo = () => {
    console.log(`Adding ${input}`);

    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
  };

  const handleTarget = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="input">
      <input type="text" value={input} onChange={handleTarget} />
      <button onClick={addTodo}>ADD!</button>
    </div>
  );
}

export default Input;
