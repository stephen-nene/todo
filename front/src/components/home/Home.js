import React, { useState } from "react";
import "./home.css";
import Delete from "../../images/delete.png";
import Update from "../../images/update.png";
import Done from "../../images/done.png";
import { todos as todosData } from "../../images/data";

export default function Home() {
  const [todos, setTodos] = useState(todosData);

  const deleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id).map((todo, index) => ({ ...todo, id: index + 1 }))
    );
    console.log("delete Todo successful");
  };

  const updateTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, editing: true } : todo))
    );
    console.log("update Todo successful");
  };

  const doneEditingTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, editing: false } : todo
      )
    );
    console.log("done editing Todo successful");
  };

  const refresh = () => {
    console.log("refreshed successfully");
  };

  return (
    <div className="main">
      <h1>TO-DOs</h1>
      <button onClick={refresh}>refresh</button>

      {todos.map((todo) => (
        <div className="todos" key={todo.id}>
          <p>{todo.id}</p>
          <input
            className="title"
            value={todo.title}
            type="text"
            disabled={!todo.editing}
            onChange={(e) =>
              setTodos((prevTodos) =>
                prevTodos.map((t) =>
                  t.id === todo.id ? { ...t, title: e.target.value } : t
                )
              )
            }
          />
          <input
            className="summary"
            type="text"
            value={todo.summary}
            disabled={!todo.editing}
            onChange={(e) =>
              setTodos((prevTodos) =>
                prevTodos.map((t) =>
                  t.id === todo.id ? { ...t, summary: e.target.value } : t
                )
              )
            }
          />
          <div className="button-container">
            {todo.editing ? (
              <button id="done" onClick={() => doneEditingTodo(todo.id)}>
                <img className="icons" id="done" src={Done} alt="done-icon" />
              </button>
            ) : (
              <button id="update" onClick={() => updateTodo(todo.id)}>
                <img className="icons" id="update" src={Update} alt="update-icon" />
              </button>
            )}
            <button id="delete" onClick={() => deleteTodo(todo.id)}>
              <img className="icons" id="delete" src={Delete} alt="delete-icon" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
