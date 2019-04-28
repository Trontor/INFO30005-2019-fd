import React from "react";
import "./Main.scss";

const Main = () => {
  return (
    <main>
      <section id="about" class="text-center">
        <div class="container">
          <div class="row align-items-center no-gutters mb-4 mb-lg-5">
            <div class="col-lg-6">
              <img
                class="img-fluid mb-3 mb-lg-0"
                src={require("../../../images/about/about.jpg")}
                alt="about"
              />
            </div>
            <div class="col-lg-6">
              <div class="description-text text-left">
                <h4>About</h4>
                <p class="about-description mb-0">
                  Hello Food offers text-based lessons, instructional videos,
                  quizzes and a personalized learning dashboard that empower
                  students to learn about nutrition, health, and physical
                  education. <hr />
                  Teachers can register their students and track their
                  individual progress. Curriculum-aligned courses are
                  pre-populated and can be unlocked to students progressively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mission">
        <div class="container">
          <div class="row align-items-center no-gutters">
            <div class="col-lg-5 col-xl-6">
              <div class="description-text text-left">
                <h2>Mission</h2>
                <p class="about-dscription mb-0">
                  Hello Food aims to cultivate a proper understanding of all
                  things health and nutrition from an early age, in an effort to
                  combat the national obesity epidemic, and to help students
                  lead healthier lives.
                </p>
              </div>
            </div>
            <div class="col-lg-7 col-xl-6">
              <img
                class="img-fluid"
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
      </section>
    </main>
  );
};

export default Main;
