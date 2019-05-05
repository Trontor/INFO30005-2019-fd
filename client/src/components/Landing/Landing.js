import { connect } from "react-redux";
import PropTypes from "prop-types";

import React, { Component } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "../layout/Footer";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(Landing);
