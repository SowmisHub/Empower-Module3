import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../api/todoService";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos()
      .then((response) => {
        setTodos(response.data.slice(0, 10)); // limit for clean UI
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container">
      <h2>Todo List</h2>

      {todos.map((todo) => (
        <div key={todo.id} className="card">
          <p>
            <b>Title:</b> {todo.title}
          </p>
          <p>
            <b>Status:</b> {todo.completed ? "Completed" : "Not Completed"}
          </p>
          <Link to={`/todo/${todo.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
