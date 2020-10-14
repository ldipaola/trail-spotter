import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import axios from "axios";
import { login } from "../../utils/login";

export default function Signup() {
  const { setUser } = useContext(UserContext);

  let history = useHistory();
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const signup = await axios.post("/api/signup", {
        email: signupEmail,
        password: signupPassword,
      });
      const user = await login(signupEmail, signupPassword);
      console.log(user);
      if (user) {
        setUser(user);
        history.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="columns">
        <div className="column col-3 col-mx-auto">
          <div className="card">
            <div className="card-header">
              <div className="card-title h5">
                Signup to begin your adventure!
              </div>
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
                    onChange={(e) => setSignupEmail(e.target.value)}
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
                    onChange={(e) => setSignupPassword(e.target.value)}
                  />
                </div>

                <button className="btn">Create account</button>
              </form>
            </div>
            <div className="card-footer">
              Already have an account? Log in <a href="/login">here</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
