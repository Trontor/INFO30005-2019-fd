import React from "react";
import "./DashboardTabs.scss";
import TabHeaders from "./TabHeaders/TabHeaders";
import ProfileTab from "./ProfileTab/ProfileTab";
import CommunityTab from "./Community/CommunityTab";
import TopicsTab from "./TopicsTab/TopicsTab";
import LeaderboardTab from "./Leaderboard/LeaderboardTab";

const DashboardTabs = props => {
  const { isTeacher } = props;
  return (
    <section id="tabContainer">
      <TabHeaders isTeacher={isTeacher} />
      <div className="tab-content" id="nav-tabContent">
        {/* <ProfileTab /> */}
        <CommunityTab isTeacher={isTeacher} threads={props.threads} />
        <LeaderboardTab isTeacher={isTeacher} />
        {isTeacher ? null : (
          <TopicsTab
            topics={props.topics}
            completedItems={props.completedItems}
          />
        )}
      </div>
    </section>
  );
};

export default DashboardTabs;
