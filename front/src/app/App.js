import React, { useState } from "react";
import './App.css';
import Login from '../components/login/Login';
import Home from "../components/home/Home";

function App() {
  const [loggedIn, setIsLoggeIn] = useState(true);


  if (loggedIn === true){
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }else{
    return <Login setIsLoggeIn={setIsLoggeIn}/>
  }

}

export default App;
