import React, {useState} from "react";
import "./home.css";
import Delete from "../../images/delete.png";
import Update from "../../images/update.png";
import {todos} from "../../images/data";
export default function Home() {
    const [todos, setTodos] = useState(todos);
    const deleteTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id).map((todo, index) => {
                return {
                    ...todo,
                    id: index + 1,
                };
            });
        });
        console.log("delete Todo successful");
      };

    const updateTodo = (id) => {
      console.log("update Todo successful");
    };

    return (
      <div className="main">
        <h1>TO-DOs</h1>

        {todos.map((todo) => (
          <div className="todos" key={todo.id}>
            <p>{todo.id}</p>
            <input className="title" value={todo.title} type="text" disabled />
            <input className="summary" type="text" value={todo.summary} disabled />
            <div className="button-container">
              <button id="update" onClick={() => updateTodo(todo.id)}>
                <img className="icons" id="update" src={Update} alt="update-icon" />
              </button>
              <button id="delete" onClick={() => deleteTodo(todo.id)}>
                <img className="icons" id="delete" src={Delete} alt="delete-icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
