import React from "react";
import "./DashboardTabs.scss";
import TabHeaders from "./TabHeaders/TabHeaders";
import CommunityTab from "./Community/CommunityTab";
import TopicsTab from "./TopicsTab/TopicsTab";
import LeaderboardTab from "./Leaderboard/LeaderboardTab";
import Statistics from "./Statistics/Statistics";

const DashboardTabs = props => {
  const { isTeacher } = props;
  return (
    <section id="tabContainer">
      <TabHeaders isTeacher={isTeacher} />
      <div className="tab-content" id="nav-tabContent">
        {/* <ProfileTab /> */}
        <CommunityTab isTeacher={isTeacher} threads={props.threads} />
        <LeaderboardTab isTeacher={isTeacher} leaderboard={props.leaderboard} />
        {isTeacher ? null : (
          <TopicsTab topics={props.topics} completedItems={props.completedItems} />
        )}
        {isTeacher ? (<Statistics isTeacher={isTeacher} leaderboard={props.leaderboard} />) : null}
      </div>)
    </section>
  );
};

export default DashboardTabs;
