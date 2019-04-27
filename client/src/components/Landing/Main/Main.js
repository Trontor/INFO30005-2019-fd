import React from "react";
import "./Main.scss";

const Main = () => {
  return (
    <main>
      <section id="about" class="text-center">
        <div class="container">
          <div class="row align-items-center no-gutters mb-4 mb-lg-5">
            <div class="col-xl-4 col-lg-5">
              <img
                class="img-fluid mb-3 mb-lg-0"
                src={require("../../../images/about/about.jpg")}
                alt="about"
              />
            </div>
            <div class="col-xl-8 col-lg-7">
              <div
                class="discription-text text-center
                                text-lg-left"
              >
                <h4>About</h4>
                <p class="about-dscription mb-0">
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
        <div class="container">
          <div class="row align-items-center no-gutters mb-4 mb-lg-5">
            <div class="col-xl">
              <div
                class="discription-text text-center
                                text-lg-left"
              >
                <h2>Mission</h2>
                <p class="about-dscription mb-0">
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
            <div class="col-xl">
              <img
                class="img-fluid mb-3 mb-lg-0"
                src={require("../../../images/mission/mission2.jpg")}
                alt="about"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="team" class="text-center">
        <div id="teamPart" calss="container text-center">
          <h1>Team</h1>
          <div class="row">
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <span
                class="team-icon rounded-circle mx-auto mb-3
                                rounded-circle"
              />
              <h4>
                <strong>Rohyl</strong>
              </h4>
              <p>Back-end, Javascript</p>
            </div>

            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <span
                class="team-icon rounded-circle mx-auto mb-3
                                rounded-circle"
              />
              <h4>
                <strong>Kevin</strong>
              </h4>
              <p>Back-end, Database</p>
            </div>

            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <span
                class="team-icon rounded-circle mx-auto mb-3
                                rounded-circle"
              />
              <h4>
                <strong>Miley</strong>
              </h4>
              <p>Front-end, Design</p>
            </div>

            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <span
                class="team-icon rounded-circle mx-auto mb-3
                                rounded-circle"
              />
              <h4>
                <strong>Yat</strong>
              </h4>
              <p>Front-end, Design</p>
            </div>
          </div>
        </div>
        <img src={require("../../../images/landing/poke.gif")} alt="" />
      </section>
    </main>
  );
};

export default Main;
