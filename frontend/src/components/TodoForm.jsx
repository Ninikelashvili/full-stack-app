import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../features/todos/todoSlice";

const TodoForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createTodo({ text }));
    setText("");
  };
  return (
    <section>
      <form onSubmit={onSubmit}>
        <label htmlFor="text">todo</label>
        <input
          type="text"
          name="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button type="submit">Add todo</button>
      </form>
    </section>
  );
};

export default TodoForm;
