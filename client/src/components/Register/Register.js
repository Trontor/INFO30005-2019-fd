import "../Login/Login.scss";
import "./Register.scss";
import React, { Component } from "react";
import classnames from "classnames";
import { registerUser } from "../../actions/authActions";
import { connect } from "react-redux";
import Loading from "../Loading/Loading";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.registerSuccess) {
      console.log("re");
      this.props.history.push("/login");
    }
  }
  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };
    this.props.registerUser(newUser);
    // axios
    //   .post("/api/student/register", newUser)
    //   .then(res => console.log(res.data))
    //   .catch(err => this.setState({ errors: err.response.data }));
  };

  render() {
    const errors = this.props.errors;
    if (this.props.loading) {
      return (
        <div className="logInPage">
          <Loading />
        </div>
      );
    }
    return (
      <div className="logInPage">
        <div id="logIn">
          <div className="modal-dialog modal-login">
            <div className="registerBg modal-content">
              <div className="modal-header">
                <div className="avatar" />
                <h4 className="modal-title">Create an Account</h4>
              </div>
              <div className="modal-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
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
                  <div className="form-group">
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
                  <div className="form-group">
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
                  <div className="form-group">
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
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block login-btn"
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

const mapStateToProps = state => ({
  registerSuccess: state.register.registerSuccess,
  errors: state.register.errors,
  loading: state.register.loading
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
