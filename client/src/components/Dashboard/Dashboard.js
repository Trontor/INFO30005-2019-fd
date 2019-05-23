import React, { Component } from "react";
import { getCurrentProfile } from "../../actions/profileActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loading from "../Loading/Loading";
import "./Dashboard.scss";
import DashboardTabs from "./DashboardTabs/DashboardTabs";
import StudentHeader from "./StudentHeader/StudentHeader";
import TeacherHeader from "./TeacherHeader/TeacherHeader";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile(this.props.isTeacherAuthed);
  }

  render() {
    if (this.props.profile.loading || !this.props.profile.data) {
      return <Loading />;
    }
    const profile = this.props.profile.data;
    const isTeacher = this.props.isTeacherAuthed;
    if (isTeacher) {
    }

    return (
      <>
        {isTeacher ? <TeacherHeader profile={profile} /> : <StudentHeader profile={profile} />}
        <DashboardTabs
          isTeacher={isTeacher}
          threads={profile.threads}
          topics={profile.topics}
          leaderboard={profile.leaderboard}
          completedItems={profile.completed}
        />
      </>
    );
  }
}

Dashboard.propTypes = {
  profile: PropTypes.object.isRequired,
  isTeacherAuthed: PropTypes.bool.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  isTeacherAuthed: state.auth.isTeacherAuthed
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
