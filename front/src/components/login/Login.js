import React, { useState } from "react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const fetchLogin = () =>{
    console.log("logging in: ")
    console.log("username/email:", username)
    console.log("password:", password)
  }

  const fetchSignUp = () =>{
    console.log("signing up: ")
    console.log("username:", username)
    console.log("email:", email)
    console.log("password:", password)
  }

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!event.target.checkValidity()) {
      // If the form is not valid, show an error message and return
      alert("Please fill up all required fields.");
      return;
    }

    // If all fields are filled up, check if the passwords match (for sign up)
    if (!isLogin && password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // If everything is valid, call the correct fetch function
    if (isLogin) {
      fetchLogin();
    } else {
      fetchSignUp();
    }
  };

  return (<div className="container">
  <div className="row justify-content-center mt-5">
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <h1>{isLogin ? "Login" : "Sign Up"}</h1>
          <form onSubmit={handleSubmit}>
            {isLogin ? (
              <div className="mb-3">
                <label className="form-label">Username/Email</label>
                <input type="text" className="form-control" value={username} onChange={handleUsernameChange} />
              </div>
            ) : (
              <div>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input type="text" className="form-control" value={username} onChange={handleUsernameChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="text" className="form-control" value={email} onChange={handleEmailChange}/>
                </div>
              </div>
            )}
            <div className="mb-3">
              <label className="form-label">Password</label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={handleShowPasswordClick}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            {!isLogin && (
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={handleShowPasswordClick}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
            )}
            <button type="submit" className="btn btn-primary">
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
          <hr />
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button className="btn btn-link" onClick={toggleForm}>
              {isLogin ? "Sign up here" : "Login here"}
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}



