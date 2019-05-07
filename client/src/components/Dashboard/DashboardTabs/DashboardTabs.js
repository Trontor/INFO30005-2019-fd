import React from "react";
import "./DashboardTabs.scss";
import TabHeaders from "./TabHeaders/TabHeaders";
import ProfileTab from "./ProfileTab/ProfileTab";
import CommunityTab from "./Community/CommunityTab";

const DashboardTabs = () => {
  return (
    <section id="tabContainer">
      <TabHeaders />
      <div class="tab-content" id="nav-tabContent">
        <ProfileTab />
        <CommunityTab />
      </div>
    </section>
  );
};

export default DashboardTabs;
