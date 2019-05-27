import React, { Component } from "react";
import "./Statistics.scss";
import { Scatter } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

class Statistics extends Component {
  render() {
    let { isTeacher, leaderboard } = this.props;
    let completedCount = [];
    for (let i = 0; i < 3; i++) completedCount.push(0);
    for (const student of leaderboard) {
      const completion = student.completed / 10;
      if (completion < 0.4) {
        completedCount[0] += 1;
      } else if (completion < 0.8) {
        completedCount[1] += 1;
      } else {
        completedCount[2] += 1;
      }
    }
    const completionData = {
      labels: ["0-40%", "40-80%", "80-100%"],
      datasets: [
        {
          data: completedCount,
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#ff6699", "#6699ff", "#ffd480"]
        }
      ]
    };

    let starCount = [];
    for (let i = 0; i < 6; i++) starCount.push(0);
    for (const student of leaderboard) {
      const star = student.stars;
      if (star < 10) {
        starCount[0] += 1;
      } else if (star < 20) {
        starCount[1] += 1;
      } else if (star < 30) {
        starCount[2] += 1;
      } else if (star < 40) {
        starCount[3] += 1;
      } else if (star < 60) {
        starCount[4] += 1;
      }
    }
    const starData = {
      labels: ["0-10", "10-20", "20-30", "30-40", "40-60", "60+"],
      datasets: [
        {
          label: "Count",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: starCount
        }
      ]
    };

    let courseStarLabel = [];
    for (const student of leaderboard) {
      courseStarLabel.push({
        x: student.completed,
        y: student.stars
      });
    }

    const courseStarData = {
      labels: ["Scatter"],
      datasets: [
        {
          fill: false,
          title: "Distribution",
          backgroundColor: "rgba(75,192,192,0.4)",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 5,
          pointHoverRadius: 10,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          pointHitRadius: 10,
          data: courseStarLabel
        }
      ]
    };

    return (
      <div
        className="col-12 tab-pane"
        id="nav-stats"
        role="tabpanel"
        aria-labelledby="nav-stats"
      >
        <div className="row">
          <div className="col-6">
            <h4 className="StatsTitle">Course Completion</h4>
            <p className="StatsTitle">
              Count of student course completion percentage.
            </p>
            <Doughnut data={completionData} />
          </div>
          <div className="col-6 px-5">
            <h4 className="StatsTitle">Current Star Distribution</h4>
            <p className="StatsTitle">Students star range.</p>
            <Bar data={starData} />
          </div>
        </div>
      </div>
    );
  }
}

export default Statistics;
