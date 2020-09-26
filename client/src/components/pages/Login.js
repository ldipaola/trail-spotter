import React from "react";

export default function Login(props) {
  return (
    <div className="container">
      <div className="columns">
        <div className="column col-3 col-mx-auto">
          <div class="card">
            <div class="card-header">
              <div class="card-title h5">Login to begin your adventure!</div>
            </div>
            <div class="card-body">
              <form class="form-horizontal">
                <div class="form-group">
                  <label class="form-label" for="login-email">
                    Email
                  </label>
                  <input
                    class="form-input"
                    type="text"
                    id="login-email"
                    placeholder="Email"
                  />
                  <br />
                  <label class="form-label" for="login-password">
                    Password
                  </label>
                  <input
                    class="form-input"
                    type="password"
                    id="login-password"
                    placeholder="Password"
                  />
                </div>

                <div class="form-group">
                  <label class="form-checkbox">
                    <input type="checkbox" />
                    <i class="form-icon"></i> Remember me
                  </label>
                </div>
                <button className="btn">Login</button>
              </form>
            </div>
            <div class="card-footer">
            Don't have an account? Sign up <a href="#">here</a> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
