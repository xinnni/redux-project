import React from "react";
import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";

import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";

// const todoList = [
//   {
//     item: "redux study",
//     done: false,
//     id: 24565765,
//   },
//   {
//     item: "fuck..",
//     done: false,
//     id: 54634577,
//   },
//   {
//     item: "AIKI LOVE U",
//     done: false,
//     id: 45788356,
//   },
//   {
//     item: "redux study",
//     done: false,
//     id: 94932065,
//   },
// ];

function App() {
  const todoList = useSelector(selectTodoList);

  return (
    <div className="App">
      <div className="app_container">
        <div className="app_todocontainer">
          {todoList.map(({ item, done, id }) => (
            <TodoItem name={item} done={done} id={id} />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
