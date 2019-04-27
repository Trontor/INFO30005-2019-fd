import React, { Component } from "react";
import "./Navigation.scss";
import $ from "jquery";
import { withRouter } from "react-router-dom";

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

  componentWillUnmount() {
    window.removeEventListener("scroll", this.navbarCollapse);
  }

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img
              class="logo"
              src={require("../../images/logo/MultiLogoResize.png")}
              alt="Logo"
            />
            <span> Hello Food </span>
          </a>
          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i class="fas fa-bars" />
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav text-uppercase ml-auto">
              {this.props.location.pathname === "/" ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="#homeTop">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#about">
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#mission">
                      Mission
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#team">
                      Team
                    </a>
                  </li>
                </>
              ) :
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Home
                    </a>
                  </li>
                </>}
              <li class="nav-item">
                <a class="nav-link ls logInbtn" href="login">
                  Log in
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ls" href="register">
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

export default withRouter(Navigation);
