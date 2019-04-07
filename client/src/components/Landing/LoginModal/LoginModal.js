import React from "react";
import "./LoginModal.scss";

const LoginModal = () => {
  return (
    <div id="logIn" class="modal fade">
      <div class="modal-dialog modal-login">
        <div class="modal-content">
          <div class="modal-header">
            <div class="avatar" />
            <h4 class="modal-title">Welcome back</h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              ×
            </button>
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
                  placeholder="Password"
                  required="required"
                />
              </div>
              <div class="form-group">
                <button
                  type="submit"
                  class="btn btn-primary btn-lg btn-block login-btn"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <a href="#">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
