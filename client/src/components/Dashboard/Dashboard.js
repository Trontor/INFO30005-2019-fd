import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <div style={{ paddingTop: "100px" }}>
        The dashboard has been designed in HTML and SASS, but not yet imported
        into this react application. Server-side input validation + its
        respective HTML elements on /register works, as well as login. TODO:
        store auth token in local storage!
      </div>
    );
  }
}

export default Dashboard;
