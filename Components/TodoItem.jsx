import React from "react";

function TodoItem({ completed, id, title, deleteTodo, toggleTodo }) {
  return (
    <li key={id}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        🗑️
      </button>
    </li>
  );
}

export default TodoItem;
