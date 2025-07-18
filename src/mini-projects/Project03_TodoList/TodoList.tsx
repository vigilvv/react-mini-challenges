import { useState } from "react";
import Todo from "./components/Todo";
import type { TodoType } from "./types";
import styles from "./TodoList.module.css";
import TodoComposer from "./components/TodoComposer";

export default function TodoList() {
  const [todos, setTodos] = useState<TodoType[]>([
    { id: 1, label: "Learn React", completed: false },
    { id: 2, label: "Learn JS", completed: false },
    { id: 3, label: "Learn TS", completed: false },
  ]);

  const handleUpdateTodo = (updatedTodo: TodoType) =>
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );

  const handleAddTodo = (newTodo: TodoType) => setTodos([...todos, newTodo]);

  const handleDeleteTodo = (id: number) =>
    setTodos(todos.filter((todo) => todo.id !== id));

  return (
    <div>
      <TodoComposer handleAddTodo={handleAddTodo} />
      <ul className={styles.todoList}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Todo
              todo={todo}
              handleUpdateTodo={handleUpdateTodo}
              handleDeleteTodo={handleDeleteTodo}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

// Handle all todos as an array and call individual <Todo />
