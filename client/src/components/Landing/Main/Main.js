import React from "react";
import "./Main.scss";

const Main = () => {
  return (
    <main>
      <section id="about" className="text-center">
        <div className="container">
          <div className="row align-items-center no-gutters mb-4 mb-lg-5">
            <div className="col-lg-6">
              <img
                className="img-fluid mb-3 mb-lg-0"
                src={require("../../../images/about/about.jpg")}
                alt="about"
              />
            </div>
            <div className="col-lg-6">
              <div className="description-text text-left">
                <h3>About</h3>
                <p className="about-description mb-0">
                  Hello Food offers text-based lessons, instructional videos,
                  quizzes and a personalized learning dashboard that empower
                  students to learn about nutrition, health, and physical
                  education.
                </p>
                <hr />
                <p className="about-description mb-0">
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
        <div className="container">
          <div className="row align-items-center no-gutters">
            <div className="col-lg-6 col-xl-6">
              <div className="description-text text-left">
                <h2>Mission</h2>
                <p className="about-dscription mb-0">
                  Hello Food aims to cultivate a proper understanding of health
                  and nutrition from an early age, in an effort to combat the
                  national obesity epidemic, and to help students lead healthier
                  lives.
                </p>
                <hr />{" "}
                <p className="about-dscription mb-0">
                  Light-hearted inter-class discussions and leaderboard will be
                  enabled to allow continued tracking of individual improvement
                  and impact over time.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <img
                className="img-fluid"
                src={require("../../../images/mission/mission2.jpg")}
                alt="about"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="text-center">
        <div id="teamPart" calss="container text-center">
          <h1>
            <strong>Team</strong>
          </h1>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <span
                className="team-icon rounded-circle mx-auto mb-3
                                rounded-circle"
              />
              <h4>
                <strong>Rohyl</strong>
              </h4>
              <p>Back-end, Javascript</p>
            </div>

            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <span
                className="team-icon rounded-circle mx-auto mb-3
                                rounded-circle"
              />
              <h4>
                <strong>Kevin</strong>
              </h4>
              <p>Back-end, Database</p>
            </div>

            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <span
                className="team-icon rounded-circle mx-auto mb-3
                                rounded-circle"
              />
              <h4>
                <strong>Miley</strong>
              </h4>
              <p>Front-end, Design</p>
            </div>

            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <span
                className="team-icon rounded-circle mx-auto mb-3
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
