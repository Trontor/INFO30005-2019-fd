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
                  "Hello Food is developed by INFO30005 Group Freedom Dive. It is an educational
                  website that aims to help kids in Australia to raise their awareness of the benefits
                  of fresh food. We are aware that the Australian government have launched initiatives to
                  educate parents on making smarter decisions towards their children's health. However, such
                  solutions are usually in the form of text-heavy information-based websites. <strong>We build the
                  website for children.</strong>"
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
                  "Our project directly targets children, typically those in primary school and
                  early middle school. We plan to develop the online platform to nurture the nutritional
                  and health awareness of children from an early age. After all, 'Hello Food' aims to be a
                  platform that is tailored to the health and physical education of students and
                  should supplement a state curriculum like the other shown established platforms."
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
      </section>
    </main>
  );
};

export default Main;
