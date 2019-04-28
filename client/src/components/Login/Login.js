import React, { Component } from "react";
import axios from "axios";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "jevin@student.unimelb.edu.au",
      password: "testok",
      errors: {}
    };
  }

  onChange = e => {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    console.log("Posting: " + userData);
    axios
      .post("/api/student/login", userData)
      .then(res => {
        this.props.history.push("/dashboard");
      })
      .catch(err => {
        console.log("loginerror :(");
      });
  };

  render() {
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
                <form onSubmit={this.onSubmit}>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="email"
                      placeholder="Email"
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
  }
}

export default Login;
