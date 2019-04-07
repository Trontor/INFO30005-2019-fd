import React, { Component } from "react";
import axios from "axios";
import "./LoginModal.scss";

class LoginModal extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(user);
  };

  render() {
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
              <form onSubmit={this.onSubmit}>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="email"
                    placeholder="Email Address"
                    required="required"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    name="password"
                    placeholder="Password"
                    required="required"
                    value={this.state.password}
                    onChange={this.onChange}
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
  }
}

export default LoginModal;
