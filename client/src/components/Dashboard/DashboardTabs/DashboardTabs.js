import React from "react";
import "./DashboardTabs.scss";
import TabHeaders from "./TabHeaders/TabHeaders";
import ProfileTab from "./ProfileTab/ProfileTab";
import CommunityTab from "./Community/CommunityTab";

const DashboardTabs = props => {
  return (
    <section id="tabContainer">
      <TabHeaders />
      <div className="tab-content" id="nav-tabContent">
        <ProfileTab />
        <CommunityTab threads={props.threads} />
      </div>
    </section>
  );
};

export default DashboardTabs;
