import React from "react";
import "./Login.scss";
const Login = () => {
  return (
    <div className="logInPage">
      <div id="logIn">
        <div class=" modal-login">
          <div class="modal-content">
            <div class="modal-header">
              <div class="avatar" />
              <h4 class="modal-title">Welcome back</h4>
            </div>
            <div class="modal-body">
              <form method="post">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="username"
                    placeholder="Username"
                    required="required"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    name="password"
                    placeholder="Password"
                    required="required"
                  />
                </div>
                <div class="form-group">
                  <button
                    type="submit"
                    class="btn btn-primary
                                    btn-lg btn-block login-btn"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <a
                href=""
                onClick={() => {
                  alert("Please contact your teacher for help :)");
                }}
              >
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
