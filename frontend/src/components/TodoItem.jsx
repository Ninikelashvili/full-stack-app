import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todos/todoSlice";

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div>{new Date(todo.createdAt).toLocaleDateString("en-US")}</div>
      <h2>{todo.text}</h2>
      <button onClick={() => dispatch(deleteTodo(todo._id))}>X</button>
    </div>
  );
};
