import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <div className="styles.inputContainer">
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <div>
          <input
            className={styles.modernInput}
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            value={todo.name}
            type="text"
            placeholder="Enter the todo Item..."
          />
          <button className={styles.modernbutton} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
