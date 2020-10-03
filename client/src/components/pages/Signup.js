import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Signup(props) {
    let history = useHistory();
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: ""
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    
    fetch("/api/signup", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        
        fetch("/api/login", {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(loginDetails),
          }).then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
            history.push("/")
          }).catch((error) => {
            console.error("Error:", error);
          });

      })
      .catch((error) => {
        console.error("Error:", error);
      });
    

  }

  const handleChange = (event) => {
    const value = event.target.value;
    if (event.target.id === "login-email") {
      setLoginDetails({
        ...loginDetails,
        email: value,
      })
    }
    else if (event.target.id === "login-password"){
      setLoginDetails({
        ...loginDetails,
        password: value,
      })
    }
  }

  return (
    <div className="container">
      <div className="columns">
        <div className="column col-3 col-mx-auto">
          <div className="card">
            <div className="card-header">
              <div className="card-title h5">Signup to begin your adventure!</div>
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
