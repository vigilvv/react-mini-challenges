import { useState } from "react";
import type { TodoType } from "../types";
import sytles from "./TodoComposer.module.css";

export default function TodoComposer({
  handleAddTodo,
}: {
  handleAddTodo: (newTodo: TodoType) => void;
}) {
  const [label, setLabel] = useState("");

  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLabel(e.target.value);

  const handleAddTodoClick = () => {
    handleAddTodo({
      id: Math.floor(Math.random() * 10000),
      label,
      completed: false,
    });
    setLabel("");
  };

  return (
    <div className={sytles.newTodoItem}>
      <input
        type="text"
        placeholder="Add a new todo"
        value={label}
        onChange={handleLabelChange}
      />
      <button disabled={!label.length} onClick={handleAddTodoClick}>
        Add todo
      </button>
    </div>
  );
}

// Add new todo on button click - show input field to add and "Add todo" button
