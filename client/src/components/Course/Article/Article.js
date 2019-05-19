import React, { Component } from "react";
import axios from "axios";
import Loading from "../../Loading/Loading";
import "./Article.scss";
import MDReactComponent from "markdown-react-js";

class Article extends Component {
  state = {
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
    const { title, image, content } = this.state.data;
    console.log(this.state.data);
    return (
      <>
        <div id="article-header" className="text-center">
          <img alt="featured" src={image} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div id="article-title">{title}</div>
            </div>
            <div className="col-12 col-sm-10 offset-sm-1 col-lg-8 offset-lg-2">
              <MDReactComponent text={content} />
            </div>
            <div className="col-12 col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 text-right">
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
      </>
    );
  }
}

export default Article;
