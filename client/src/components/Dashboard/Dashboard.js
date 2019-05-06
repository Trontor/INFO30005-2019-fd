import React, { Component } from "react";
import { getCurrentProfile } from "../../actions/profileActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loading from "../Loading/Loading";
import "./Dashboard.scss";

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
    return (
      <section id="topInterface">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6">
              <div class="well well-sm">
                <div class="row">
                  <div class="col-sm-6 col-md-4 avatar">
                    <img src={profile.avatar} alt="Avatar" />
                  </div>
                  <div class="col-sm-6 col-md-8">
                    <h4>{profile.name}</h4>
                    <small>{profile.school}</small>
                    <p>{profile.email}</p>
                    <p class="d-inline"> Lv.1</p>
                    <p class="d-inline">
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
