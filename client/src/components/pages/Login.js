import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../../utils/login"
import UserContext from "../../utils/UserContext"

export default function Login() {

  const { user, setUser } = useContext(UserContext);

  let history = useHistory();
 
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = await login(loginEmail, loginPassword)
    console.log(user);
    setUser(user);
    history.push("/");
      
  };

  return (
    <div className="container">
      <div className="columns">
        <div className="column col-3 col-mx-auto">
          <div className="card">
            <div className="card-header">
              <div className="card-title h5">Login to begin your adventure!</div>
            </div>
            <div className="card-body">
              <form className="form-horizontal" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="login-email">
                    Email
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    id="login-email"
                    placeholder="Email"
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                  <br />
                  <label className="form-label" htmlFor="login-password">
                    Password
                  </label>
                  <input
                    className="form-input"
                    type="password"
                    id="login-password"
                    placeholder="Password"
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>

                <button className="btn">Login</button>
              </form>
            </div>
            <div className="card-footer">
            Don't have an account? Sign up <a href="/signup">here</a> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
