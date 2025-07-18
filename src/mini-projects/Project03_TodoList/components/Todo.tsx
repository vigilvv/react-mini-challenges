import { useState } from "react";
import type { TodoType } from "../types";
import styles from "./Todo.module.css";

export default function Todo({
  todo,
  handleUpdateTodo,
  handleDeleteTodo,
}: {
  todo: TodoType;
  handleUpdateTodo: (updatedTodo: TodoType) => void;
  handleDeleteTodo: (id: number) => void;
}) {
  const [editing, setEditing] = useState(false);

  const handleEditClick = () => setEditing(!editing);

  const handleCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) =>
    handleUpdateTodo({ ...todo, completed: e.target.checked });

  const handleUpdateLabel = (e: React.ChangeEvent<HTMLInputElement>) =>
    handleUpdateTodo({ ...todo, label: e.target.value });

  const handleDeleteTodoClick = () => handleDeleteTodo(todo.id);

  return (
    <div className={styles.todo}>
      <label htmlFor={`checkbox-${todo.id}`} className={styles.todoLabel}>
        <input
          type="checkbox"
          checked={todo.completed}
          id={`checkbox-${todo.id}`}
          onChange={handleCheckboxClick}
        />
        {editing ? (
          <input type="text" value={todo.label} onChange={handleUpdateLabel} />
        ) : (
          <span className={todo.completed ? styles.todoLabelStrikethrough : ""}>
            {todo.label}
          </span>
        )}
      </label>
      <div>
        <button onClick={handleEditClick}>{editing ? "Save" : "Edit"}</button>
        <button onClick={handleDeleteTodoClick}>❌</button>
      </div>
    </div>
  );
}

// Display the single todo item - with checkbox and label
// Have an edit/save button
// -- In edit mode show an input field to edit and a "Save" button
// A button to delete todo
