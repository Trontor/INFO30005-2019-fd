import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="overlay" />
      <div className="container h-100" id="homeTop">
        <div className="d-flex h-100 text-center align-items-center">
          <div className="w-100 text-white">
            <div className="intro-heading text-uppercase display-3">
              Hello Food
            </div>
            <div className="intro-text mb-0">Explore. Engage. Entertain.</div>
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
