/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./Login.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

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
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
    // axios
    //   .post("/api/student/login", userData)
    //   .then(res => {
    //     this.props.history.push("/dashboard");
    //   })
    //   .catch(err => {
    //     console.log("loginerror :(");
    //   });
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="logInPage">
        <div id="logIn">
          <div className=" modal-login">
            <div className="modal-content">
              <div className="modal-header">
                <div className="avatar" />
                <h4 className="modal-title">Welcome back</h4>
              </div>
              <div className="modal-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control", {
                        "is-invalid": errors.email
                      })}
                      name="email"
                      placeholder="Email"
                      required="required"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className={classnames("form-control", {
                        "is-invalid": errors.password
                      })}
                      name="password"
                      placeholder="Password"
                      required="required"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-primary
                                    btn-lg btn-block login-btn"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <a
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
