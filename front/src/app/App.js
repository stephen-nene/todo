import React, { useState } from "react";
import './App.css';
import Login from '../login/Login';

function App() {
  const [loggedIn, setIsLoggeIn] = useState(true);
  if (loggedIn === true){
    return (
      <div className="App">
        <Login/>
      </div>
    );
  }else{
    return <Login/>
  }

}

export default App;
