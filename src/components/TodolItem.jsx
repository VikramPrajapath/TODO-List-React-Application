import styles from "./todoItem.module.css";
export default function ToolItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Handle button clicked for ", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    console.log("Handle", name);
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }
  const task = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={task} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>

        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            X
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
