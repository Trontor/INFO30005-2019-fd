import React, { Component } from "react";
import axios from "axios";
import Loading from "../../Loading/Loading";
import "./Article.scss";
import MDReactComponent from "markdown-react-js";
import StarpopUp from "../StarpopUp/StarpopUp";

class Article extends Component {
  state = {
    finished: false,
    jump: false,
    data: undefined
  };
  componentWillMount() {
    this.id = this.props.match.params.id;
    const URL = "../../api/article/" + this.id;
    axios.get(URL).then(res => {
      this.setState({ data: res.data });
    });
  }

  completeArticle = () => {
    if (!this.state.finished) {
      this.setState({ finished: true });
    } else {
      this.setState({ jump: true });
    }
    if (this.state.jump) {
      axios
          .post("../../api/student/items/complete/", { id: this.id })
          .then(res => {
            if (res.status === 200) {
              this.props.history.push("/dashboard");
            }
          });
    }
  };
z
  render() {
    if (!this.state.data) {
      return <Loading />;
    }
    const { title, image, content } = this.state.data;

    return (
      <>
        <div id="article-header" className="text-center">
          <img alt="featured" src={image} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              {this.state.finished ? null: (
                  <div id="article-title">{title}</div>
              )}
            </div>
            <div className="col-12 col-sm-10 offset-sm-1 col-lg-8 offset-lg-2">
              {this.state.finished ? (
                <StarpopUp value="8" />
              ) : (
                <MDReactComponent text={content} />
              )}
            </div>
            <div className="col-12 col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 text-right">
              {this.state.jump ? null : (
                <button
                  type="button"
                  style={{ width: "150px", height: "50px" }}
                  className="btn btn-warning"
                  onClick={this.completeArticle}
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Article;
