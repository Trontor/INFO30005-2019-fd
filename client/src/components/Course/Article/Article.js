import React, { Component } from "react";
import axios from "axios";
import Loading from "../../Loading/Loading";
import "./Article.scss";
import MDReactComponent from 'markdown-react-js';
import Image from 'react-image-resizer';

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
    const {
      title,
      author,
      datePosted,
      featuredImage,
      content,
      starAward
    } = this.state.data;
    console.log(this.state.data);
    return (
      <>
        <div id="article-bg">
          <Image
              src="https://puu.sh/DtVYh/0f6201b950.png"
              height={200}
              width={1300}
          />
        </div>
        <h2 id="masthead">{title}</h2>
        <h4 id="author">{author}</h4>
        <div id="content">
          <MDReactComponent text={content} />
        </div>
        <div id="next-button">
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
      </>
    );
  }
}

export default Article;
