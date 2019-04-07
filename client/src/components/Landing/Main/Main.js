import React from "react";
import "./Main.scss";

const Main = () => {
  return (
    <main>
      <section id="about" className="text-center">
        <div className="container">
          <div className="row align-items-center no-gutters mb-4 mb-lg-5">
            <div className="col-xl-4 col-lg-5">
              <img
                className="img-fluid mb-3 mb-lg-0"
                src={require("../../../images/about/about.jpg")}
                alt="about picture"
              />
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="discription-text text-center text-lg-left">
                <h4>About</h4>
                <p className="about-dscription mb-0">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mission">
        <div className="container">
          <div className="row align-items-center no-gutters mb-4 mb-lg-5">
            <div className="col-xl">
              <div className="discription-text text-center text-lg-left">
                <h2>Mission</h2>
                <p className="about-dscription mb-0">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>
              </div>
            </div>
            <div className="col-xl">
              <img
                className="img-fluid mb-3 mb-lg-0"
                src={require("../../../images/mission/mission2.jpg")}
                alt="about picture"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="text-center">
        <div id="teamPart" calss="container text-center">
          <h1>Team</h1>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <span className="team-icon rounded-circle mx-auto mb-3 rounded-circle" />
              <h4>
                <strong>Rohyl</strong>
              </h4>
              <p>Back-end, Javascript</p>
            </div>

            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <span className="team-icon rounded-circle mx-auto mb-3 rounded-circle" />
              <h4>
                <strong>Kevin</strong>
              </h4>
              <p>Back-end, Database</p>
            </div>

            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <span className="team-icon rounded-circle mx-auto mb-3 rounded-circle" />
              <h4>
                <strong>Miley</strong>
              </h4>
              <p>Front-end, Design</p>
            </div>

            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <span className="team-icon rounded-circle mx-auto mb-3 rounded-circle" />
              <h4>
                <strong>Yat</strong>
              </h4>
              <p>Front-end, Design</p>
            </div>
          </div>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12610.919637141424!2d144.961174!3d-37.796369!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeacb63e2b725ff6d!2sUniversity+of+Melbourne!5e0!3m2!1sen!2sau!4v1554343861702!5m2!1sen!2sau"
            width="100%"
            height="100%"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            style={{ border: 0 }}
            allowfullscreen
          />
        </div>

        <img src="image/team/cat2.gif" alt="" />
      </section>
    </main>
  );
};

export default Main;
