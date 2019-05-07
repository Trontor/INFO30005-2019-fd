import React, { Component } from "react";
import axios from "axios";
import Loading from "../../Loading/Loading";
import "./ViewThread.css";
import ThreadPost from "./ThreadPost/ThreadPost";
import { connect } from "react-redux";

class ViewThread extends Component {
  state = {
    replyMessage: "",
    data: ""
  };
  componentWillMount() {
    const id = this.props.match.params.id;
    this.threadId = id;
    // Load the post information from API endpoint
    axios.get("../../api/thread/" + id).then(res => {
      this.setState({ data: res.data });
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    const postData = {
      authorID: this.props.authorID,
      content: this.state.replyMessage
    };
    this.postReply(postData);
  };

  postReply = postData => {
    //TODO: add axios post to /api/threads/
    axios
      .post(`../../api/thread/${this.threadId}`, postData)
      .then(res => window.location.reload())
      .catch(err => console.log(err));
  };

  render() {
    if (!this.state.data) {
      return <Loading />;
    }
    console.log(this.state.data);
    const { title, name, date, avatar, content, replies } = this.state.data;
    return (
      <div
        id="threadContainer"
        className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12 col-xs-12 "
      >
        <div className="hr-sect">Original Post</div>
        <ThreadPost
          parent
          title={title}
          imgSrc={avatar}
          content={content}
          name={name}
          date={date}
        />
        <div class="hr-sect">Replies</div>
        {replies.length === 0 && <div>No replies... yet</div>}
        {replies.map(reply => (
          <ThreadPost
            imgSrc={reply.avatar}
            content={reply.content}
            name={reply.name}
            date={reply.date}
          />
        ))}

        <div class="hr-sect">Post a Reply</div>
        <form>
          <div className="form-group">
            <label>Message</label>
            <textarea
              className="form-control"
              id="replyMessage"
              defaultValue={this.state.replyMessage}
              name="replyMessage"
              placeholder="I think..."
              rows="5"
              onChange={this.handleChange}
            />
          </div>
          <button
            onClick={this.handleSubmitForm}
            className="my-2 btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authorID: state.auth.user.id
});

export default connect(mapStateToProps)(ViewThread);
