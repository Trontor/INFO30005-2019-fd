import React, { Component } from "react";
import { getCurrentProfile } from "../../actions/profileActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loading from "../Loading/Loading";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  render() {
    if (this.props.profile.loading) {
      return <Loading />;
    }
    return (
      <div style={{ paddingTop: "100px" }}>
        {this.props.profile.loading ? "LOADING" : null}
        The dashboard has been designed in HTML and SASS, but not yet imported
        into this react application. Server-side input validation + its
        respective HTML elements on /register works, as well as login. TODO:
        store auth token in local storage!
      </div>
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
