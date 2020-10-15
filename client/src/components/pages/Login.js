import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../../utils/login"
import UserContext from "../../utils/UserContext"

export default function Login() {

  const [loginError, setLoginError] = useState(false);
  const { user, setUser } = useContext(UserContext);

  let history = useHistory();
 
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = await login(loginEmail, loginPassword)
    console.log(user);
    if (user) {
    setUser(user);
    history.push("/");
    } else {
      setLoginError(true);
    }
      
  };


  return (
    <div className="container" style={{margin: "0.8em"}}>
      <div className="columns">
        <div className="column col-3 col-mx-auto">
          <div className="card">
            <div className="card-header">
              <div className="card-title h5">Login to begin your adventure!</div>
              {loginError ? <p className="form-input-hint" style={{color: "#E85600", margin: "0"}}>The email or password is invalid.</p> : null}
            </div>
            <div className="card-body">
              <form className="form-horizontal" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="login-email">
                    Email
                  </label>
                  <input
                    className={"form-input " + (loginError ? "is-error" : "")}
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
                    className={"form-input " + (loginError ? "is-error" : "")}
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
