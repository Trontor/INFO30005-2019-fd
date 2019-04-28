import "../Login/Login.scss";
import "./Register.scss";
import React, { Component } from "react";
import classnames from "classnames";
import axios from "axios";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };
    axios
      .post("/api/student/register", newUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="logInPage">
        <div id="logIn">
          <div class="modal-dialog modal-login">
            <div class="registerBg modal-content">
              <div class="modal-header">
                <div class="avatar" />
                <h4 class="modal-title">Create an Account</h4>
              </div>
              <div class="modal-body">
                <form onSubmit={this.onSubmit}>
                  <div class="form-group">
                    <input
                      type="text"
                      className={classnames("form-control", {
                        "is-invalid": errors.name
                      })}
                      name="name"
                      placeholder="Name"
                      value={this.state.name}
                      onChange={this.onChange}
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      className={classnames("form-control", {
                        "is-invalid": errors.email
                      })}
                      name="email"
                      placeholder="Email Address"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      className={classnames("form-control", {
                        "is-invalid": errors.password
                      })}
                      name="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      className={classnames("form-control", {
                        "is-invalid": errors.confirmPassword
                      })}
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={this.state.confirmPassword}
                      onChange={this.onChange}
                    />
                    {errors.confirmPassword && (
                      <div className="invalid-feedback">
                        {errors.confirmPassword}
                      </div>
                    )}
                  </div>
                  <div class="form-group">
                    <button
                      type="submit"
                      class="btn btn-primary btn-lg btn-block login-btn"
                    >
                      Register
                    </button>
                  </div>
                </form>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
