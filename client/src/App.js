import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/layout/Footer";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";

// Check for token
if (localStorage.getItem("jwtToken")) {
  // Set auth token header auth
  setAuthToken(localStorage.getItem("jwtToken"));
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.getItem("jwtToken"));
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Log out the user
    store.dispatch(logoutUser);
    // TODO: Clear current profile
    // Redirect to login
    window.location.href = "/login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navigation />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Landing} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
