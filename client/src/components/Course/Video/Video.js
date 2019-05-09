import React, { Component } from "react";
import axios from "axios";
import "./Video.css";
import Loading from "../../Loading/Loading";
import { withRouter } from "react-router-dom";
class Video extends Component {
  state = {
    data: undefined
  };
  componentWillMount() {
    this.id = this.props.match.params.id;
    axios.get("../../api/videos/" + this.id).then(res => {
      this.setState({ data: res.data });
    });
  }
  completeVideo = () => {
    axios
      .post("../../api/student/items/complete/", { id: this.id })
      .then(res => {
        if (res.status === 200) {
          this.props.history.push("/dashboard");
        }
      });
  };
  render() {
    if (!this.state.data) {
      return <Loading />;
    }
    const { title, description, contentURL } = this.state.data;
    const vidSrc = contentURL.replace("watch?v=", "embed/");
    return (
      <div className="row m-0">
        <div className="embed-responsive embed-responsive-16by9 video-course ">
          <iframe
            title={this.state.data.title}
            className="embed-reponsive-item"
            src={vidSrc}
            allowfullscreen
          />
        </div>
        <div className="row video-text">
          <div className="col-12 col-md">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <div className="col-12 col-md-auto d-flex align-items-center">
            <button
              type="button"
              style={{ width: "150px", height: "50px" }}
              className="btn btn-warning"
              onClick={this.completeVideo}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Video);
