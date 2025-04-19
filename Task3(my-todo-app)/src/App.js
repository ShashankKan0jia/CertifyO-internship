import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (task.trim() !== "") {
      if (editingIndex !== null) {
        const updatedTodos = [...todos];
        updatedTodos[editingIndex].text = task;
        setTodos(updatedTodos);
        setEditingIndex(null);
      } else {
        setTodos([...todos, { text: task, completed: false }]);
      }
      setTask("");
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      const newTodos = todos.filter((_, i) => i !== index);
      setTodos(newTodos);
    }
  };

  const clearAll = () => {
    if (window.confirm("Are you sure you want to clear all tasks?")) {
      setTodos([]);
    }
  };

  const editTodo = (index) => {
    setTask(todos[index].text);
    setEditingIndex(index);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  });

  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <div className="input-section">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task..."
        />
        <button onClick={addTodo}>
          {editingIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      <div className="filter-section">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("incomplete")}>Incomplete</button>
      </div>

      <ul className="todo-list">
        {filteredTodos.map((todo, index) => (
          <li key={index} className={todo.completed ? "completed" : ""}>
            <span onClick={() => toggleTodo(index)}>{todo.text}</span>
            <button onClick={() => editTodo(index)}>✎</button>
            <button onClick={() => removeTodo(index)}>❌</button>
          </li>
        ))}
      </ul>

      <button className="clear-all" onClick={clearAll}>
        Clear All
      </button>

      <footer>
        <p>Credits: Built with React by Shashank Kanojia</p>
        <p>
          Project inspired by the Frontend Developer Task from CertifyO
          Internship
        </p>
      </footer>
    </div>
  );
}

export default App;
