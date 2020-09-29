import React, { useState } from "react";

export default function Login(props) {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: ""
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    console.log(loginDetails)

    
    fetch("/api/login", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
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
