import React from "react";
import "./TabHeaders.scss";
import classNames from "classnames";

const TabHeaders = props => {
  return (
    <nav>
      <div
        className="nav nav-tabs justify-content-center"
        id="nav-tab"
        role="tablist"
      >
        <a
          className={classNames("nav-item nav-link ", {
            active: props.isTeacher
          })}
          id="nav-community-tab"
          data-toggle="tab"
          href="#nav-community"
          role="tab"
          aria-controls="nav-community"
          aria-selected="true"
        >
          Community
        </a>

        <a
          className="nav-item nav-link"
          id="nav-leaderboard-tab"
          data-toggle="tab"
          href="#nav-leaderboard"
          role="tab"
          aria-controls="nav-leaderboard"
          aria-selected="true"
        >
          {props.isTeacher ? "Manage" : "Leaderboard"}
        </a>
        {!props.isTeacher && (
          <a
            className="nav-item nav-link active"
            id="nav-topics-tab"
            data-toggle="tab"
            href="#nav-topics"
            role="tab"
            aria-controls="nav-topics"
            aria-selected="true"
          >
            Topics
          </a>
        )}
      </div>
    </nav>
  );
};

export default TabHeaders;
