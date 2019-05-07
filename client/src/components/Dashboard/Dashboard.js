import React, { Component } from "react";
import { getCurrentProfile } from "../../actions/profileActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loading from "../Loading/Loading";
import "./Dashboard.scss";
import DashboardTabs from "./DashboardTabs/DashboardTabs";

const starImg = require("../../images/dashboard/star/star.gif");

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  render() {
    if (this.props.profile.loading || !this.props.profile.data) {
      return <Loading />;
    }
    const profile = this.props.profile.data;
    // console.log(profile);
    return (
      <>
        <section id="topInterface">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6">
                <div className="well well-sm">
                  <div className="row">
                    <div className="col-sm-6 col-md-4 avatar">
                      <img src={profile.avatar} alt="Avatar" />
                    </div>
                    <div className="col-sm-6 col-md-8">
                      <h4>{profile.name}</h4>
                      <small>{profile.school}</small>
                      <p>{profile.email}</p>
                      <p className="d-inline"> Lv.1</p>
                      <p className="d-inline">
                        <img alt="Stars" src={starImg} />
                        x2
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <DashboardTabs threads={profile.threads} />
      </>
    );
  }
}

Dashboard.propTypes = {
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
