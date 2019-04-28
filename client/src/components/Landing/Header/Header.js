import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="overlay" />
      <div className="container" id="homeTop">
        <div className="h-100 text-center align-items-center">
          <div className="w-100 text-white">
            <div className="intro-heading">
              Reinvent your school's health and nutrition education
            </div>
            <div className="intro-text mb-0">
              A modern, curriculum-aligned, health and nutrition education
              platform.
            </div>
            <a className="btn text-uppercase" href="login">
              Start here
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
