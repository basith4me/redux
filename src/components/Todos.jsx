import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => (
        <div className="flex flex-row items-center justify-center space-x-3">
          <li key={todo.id}>{todo.text}</li>
          <button
            className="border bg-red-400 p-1 rounded hover:bg-red-700"
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

export default Todos;
