import React, { Component } from "react";
import "./LeaderboardTab.scss";
import axios from "axios";
class LeaderboardTab extends Component {
  resetUser = e => {
    e.preventDefault();
    axios
      .post("/api/student/reset/", { id: e.target.name })
      .then(() => {
        document.location.reload();
      })
      .catch(err => {
        alert("Error resetting student " + err);
      });
  };
  render() {
    let { isTeacher, leaderboard } = this.props;
    if (!isTeacher) {
      leaderboard = leaderboard.slice(0, 3);
    }
    return (
      <div
        className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1 col-12 p-0 tab-pane"
        id="nav-leaderboard"
        role="tabpanel"
        aria-labelledby="nav-leaderboard"
      >
        <table class="table table-hovor" id="management-table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Email</th>
              <th scope="col">Stars</th>
              <th scope="col">Completed</th>
              {isTeacher && <th scope="col">Reset</th>}
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((student, idx) => (
              <tr>
                <td>{idx + 1}</td>
                <td>{student.name.split(" ")[0]}</td>
                <td>{student.name.split(" ")[1]}</td>
                <td>{student.email}</td>
                <td>{student.stars}</td>
                <td>{student.completed}</td>
                {isTeacher && (
                  <td>
                    <button
                      name={student.id}
                      className="btn-primary"
                      onClick={this.resetUser}
                    >
                      Reset
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default LeaderboardTab;
