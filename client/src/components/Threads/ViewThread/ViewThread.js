import React, { Component } from "react";
import axios from "axios";
class ViewThread extends Component {
  state = {
    content: ""
  };
  componentWillMount() {
    const id = this.props.match.params.id;
    console.log(id);
    // Load the post information from API endpoint
    axios.get("../../api/thread/" + id).then(res => {
      this.setState({ content: res.data });
    });
  }
  render() {
    return <div>{this.state.content.content}</div>;
  }
}

export default ViewThread;
