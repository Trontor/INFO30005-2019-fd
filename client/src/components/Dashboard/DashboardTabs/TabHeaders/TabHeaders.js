import React from "react";
import "./TabHeaders.scss";
const TabHeaders = () => {
  return (
    <nav>
      <div
        class="nav nav-tabs justify-content-center"
        id="nav-tab"
        role="tablist"
      >
        <a
          class="nav-item nav-link"
          id="nav-profile-tab"
          data-toggle="tab"
          href="#nav-profile"
          role="tab"
          aria-controls="nav-profile"
          aria-selected="false"
        >
          Profile
        </a>
        <a
          class="nav-item nav-link active"
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
          class="nav-item nav-link"
          id="nav-progress-tab"
          data-toggle="tab"
          href="#nav-progress"
          role="tab"
          aria-controls="nav-progress"
          aria-selected="false"
        >
          Progress
        </a>
        <a
          class="nav-item nav-link"
          id="nav-course-tab"
          data-toggle="tab"
          href="#nav-course"
          role="tab"
          aria-controls="nav-course"
          aria-selected="false"
        >
          Course
        </a>
        <a
          class="nav-item nav-link"
          id="nav-event-tab"
          data-toggle="tab"
          href="#nav-event"
          role="tab"
          aria-controls="nav-event"
          aria-selected="false"
        >
          Event
        </a>
        <a
          class="nav-item nav-link"
          id="nav-management-tab"
          data-toggle="tab"
          href="#nav-management"
          role="tab"
          aria-controls="nav-management"
          aria-selected="false"
        >
          Management
        </a>
      </div>
    </nav>
  );
};

export default TabHeaders;
