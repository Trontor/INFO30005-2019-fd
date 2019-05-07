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

  processLogin = () => {
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  };
  onSubmit = e => {
    e.preventDefault();
    this.processLogin();
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
                {/* {this.props.justRegistered && "registrationn success"} */}
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
              <div className="row text-center bg-info text-light p-2">
                <div className="col-12">Developer Quick Login</div>
                <div className="col-4">Jane Doe</div>
                <div className="col-4">Jevin Koshi</div>
                <div className="col-4">test</div>
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
  justRegistered: state.register.registerSuccess,
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
