import React from "react";
import "./TabHeaders.scss";
const TabHeaders = () => {
  return (
    <nav>
      <div
        className="nav nav-tabs justify-content-center"
        id="nav-tab"
        role="tablist"
      >
        <a
          className="nav-item nav-link "
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
      </div>
    </nav>
  );
};

export default TabHeaders;
