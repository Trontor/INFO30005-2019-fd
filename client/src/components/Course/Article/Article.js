import React, { Component } from "react";
import axios from "axios";
import Loading from "../../Loading/Loading";
import "./Article.scss";

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
        <h1>{title}</h1>
        <p>{content}</p>
      </>
    );
  }
}

export default Article;
