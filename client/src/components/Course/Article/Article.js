import React, { Component } from "react";
import axios from "axios";
import Loading from "../../Loading/Loading";

class Article extends Component {
  state = {
    data: undefined
  };
  componentWillMount() {
    this.id = this.props.match.params.id;
    axios.get("../../api/articles/" + this.id).then(res => {
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
    return <div>test</div>;
  }
}

export default Article;
