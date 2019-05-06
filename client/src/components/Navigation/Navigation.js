/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./Navigation.scss";
import $ from "jquery";
import { withRouter, Link } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";

class Navigation extends Component {
  navbarCollapse() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
      $();
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.navbarCollapse);
    // *** Need modify Later
    $('a[href*="#"]').on("click", function(e) {
      e.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $($(this).attr("href")).offset().top
        },
        300,
        "linear"
      );
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.navbarCollapse);
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const guestLinks = (
      <>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ls logInbtn" to="/login">
            Log in
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ls " to="/register">
            Sign up
          </Link>
        </li>
      </>
    );
    const authLinks = (
      <li className="nav-item">
        <img
          src={user.avatar}
          alt={user.name}
          className="rounded-circle"
          style={{ width: "50px", marginRight: "15px" }}
          title="You must have a Gravatar connected to your email to display ann image"
        />
        <a
          onClick={this.onLogoutClick}
          style={{ cursor: "pointer" }}
          className="nav-link ls d-inline"
        >
          Log out
        </a>
      </li>
    );

    return (
      <nav
        className={classnames("navbar navbar-expand-lg navbar-light ", {
          "nav-transparent fixed-top": this.props.location.pathname === "/"
        })}
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              className="logo"
              src={require("../../images/logo/MultiLogoResize.png")}
              alt="Logo"
            />
            <span> Hello Food </span>
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              {this.props.location.pathname === "/" ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="#homeTop">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#mission">
                      Mission
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#team">
                      Team
                    </a>
                  </li>
                </>
              ) : null}
              {isAuthenticated ? authLinks : guestLinks}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Navigation.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(withRouter(Navigation));
