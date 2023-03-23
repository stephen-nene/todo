import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "../components/navbar/Navbar";
import Login from '../components/login/Login';
import Home from "../components/home/Home";
import AddTodo from "../components/add-todo/AddTodo";
import Profile from "../components/profile/Profile";

function App() {
  const [loggedIn, setIsLoggeIn] = useState(true);


  if (loggedIn === false){
    return (
    <Login setIsLoggeIn={setIsLoggeIn}/>
    );
  }else{
    return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element= <Home/> />
          <Route path="/add-todo" element={<AddTodo/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
    </BrowserRouter>
    );
  }

}

export default App;
