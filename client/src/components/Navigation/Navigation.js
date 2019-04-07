import React, { Component } from "react";
import "./Navigation.scss";
import $ from "jquery";

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
  }
  render() {
    return (
      <nav
        bg="light"
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" href="#homeTop">
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
              <li className="nav-item">
                <a
                  className="nav-link ls logInbtn"
                  href="#logIn"
                  data-toggle="modal"
                >
                  Log in
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ls" href="#signUp">
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
