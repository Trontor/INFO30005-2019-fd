import React from "react";
import "../Login/Login.scss";

const Register = () => {
  return (
    <div id="logIn">
      <div class="modal-dialog modal-login">
        <div class="modal-content-2">
          <div class="modal-header">
            <div class="avatar" />
            <h4 class="modal-title">Create an Account</h4>
          </div>
          <div class="modal-body">
            <form action="/examples/actions/confirmation.php" method="post">
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
                  placeholder="Email"
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
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  placeholder="Confirm Password"
                  required="required"
                />
              </div>
              <div class="form-group">
                <button
                  type="submit"
                  class="btn btn-primary
                                    btn-lg btn-block login-btn"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
