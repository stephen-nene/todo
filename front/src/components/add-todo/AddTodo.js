import React, { useState } from "react";

function AddTodo({ profileData }) {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  const addTodo = () => {
    setUserId(profileData.session);
    // Implement your add-todo logic here
    console.log("todo added", title, summary);
  };

  return (
    <div
      className="main"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Add Todo</h1>
      <div className="addtodo">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            placeholder="To-Do title"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Summary</label>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="form-control"
            rows="3"
          ></textarea>
        </div>
      </div>
      <button className="btn btn-outline-success" onClick={addTodo}>
        Add Todo
      </button>
    </div>
  );
}

export default AddTodo;
