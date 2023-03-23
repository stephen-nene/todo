import React, { useState } from "react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);
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
    if (isLogin) {
      // handle login submit
      console.log("login submitted")
    } else {
      // handle signup submit
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      // continue with signup process
      console.log("signup done")
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1>{isLogin ? "Login" : "Sign Up"}</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email/Username</label>
                  <input type="text" className="form-control" />
                </div>
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
                {isLogin ? null : (
                  <div>
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



