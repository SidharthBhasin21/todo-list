import { useEffect, useState } from "react";
import TodoForm from "../Components/TodoForm";
import TodoList from "../Components/TodoList";

const App = () => {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });
  useEffect(() => {
    localStorage.setItem("Item", JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id, completed) => {
    setTodos((currentTodo) => {
      return currentTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };
  const deleteTodo = (id) => {
    setTodos((currentTodo) => {
      return currentTodo.filter((todo) => todo.id !== id);
    });
  };
  const addTodo = (title) => {
    setTodos((currentTodo) => {
      return [
        ...currentTodo,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  };

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <h1 className="header">ToDo List</h1>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </>
  );
};
export default App;
