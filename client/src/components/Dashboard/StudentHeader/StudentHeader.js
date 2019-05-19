import React from "react";

const starImg = require("../../../images/dashboard/star.png");
const todoImg = require("../../../images/dashboard/to-do-list.png");
const checkedImg = require("../../../images/dashboard/checked.png");

const StudentHeader = props => {
  const profile = props.profile;
  const completedCount = profile.completed.length;
  const itemsToComplete =
    profile.topics
      .map(topic => topic.items.length)
      .reduce((acc, val) => acc + val) - completedCount;
  return (
    <section id="topInterface">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1">
            <div className="row">
              <div className="col-12 col-lg-2 p-0 center">
                <img
                  className="avatar w-md-100"
                  src={profile.avatar}
                  alt="Avatar"
                />
              </div>
              <div className="col-12 col-md-5 col-lg-4 text-lg-left text-center ">
                <div className="d-inline-block">
                  <div id="name">{profile.name}</div>
                  <div id="email">{profile.email}</div>
                  <div id="teacher">
                    Teacher:{" "}
                    <span>
                      {profile.teacherHonor} {profile.teacherName}
                    </span>
                  </div>
                  <div id="school">
                    School:
                    <span>{"   " + profile.school}</span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 col-lg-6 text-md-right text-center ">
                <div className="text-right d-inline-block">
                  <div id="completed-info">
                    <span>{completedCount} items completed</span>
                    <img id="star-img" src={checkedImg} alt="Avatar" />
                  </div>
                  <div id="not-completed">
                    <span> {itemsToComplete} items to complete</span>
                    <img src={todoImg} alt="Avatar" />
                  </div>
                  <div id="completed-stars">
                    <span>{profile.stars}</span>
                    <img src={starImg} alt="Avatar" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentHeader;
