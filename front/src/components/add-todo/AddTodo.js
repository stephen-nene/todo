import React from "react";

function AddTodo(){

    const addTodo = () => {
        // Implement your add-todo logic here
        console.log("todo added");
      };


    return (
 <div className="main" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
     <h1>Add Todo</h1>
         <div className="addtodo">
             <div className="mb-3">
                 <label className="form-label">Title</label>
                 <input type="text" className="form-control" placeholder="To-Do title" />
             </div>
             <div className="mb-3">
                 <label  className="form-label">Summary</label>
                 <textarea className="form-control" rows="3"></textarea>
             </div>
         </div>
         <button className="btn btn-outline-success" onClick={addTodo}>Add Todo</button>
 </div>
    )
}

export default AddTodo;
