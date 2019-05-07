import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { submitPost } from "../../actions/threadActions";
import Loading from "../../components/Loading/Loading";

class NewThread extends Component {
  state = {
    subject: "",
    topic: "Food",
    message: "",
    errors: {}
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmitForm = event => {
    //a
    event.preventDefault();
    const postData = {
      title: this.state.subject,
      topic: this.state.topic,
      content: this.state.message,
      authorID: this.props.userID
    };
    this.props.submitPost(postData);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.submitted) {
      this.props.history.push("/dashboard");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    }
    return (
      <div className="py-5 col-md-6 offset-md-3">
        <h1>New Community Post</h1>
        <form>
          <div class="form-group">
            <label for="subject">Subject</label>
            <input
              class="form-control"
              id="subject"
              name="subject"
              aria-describedby="subjectHelp"
              placeholder="Enter title"
              onChange={this.handleChange}
            />
            <small id="subjectHelp" class="form-text text-muted">
              What is your post about?
            </small>
          </div>
          <div class="form-group">
            <label>Topic</label>
            <select
              id="topic"
              name="topic"
              class="form-control"
              onChange={this.handleChange}
            >
              <option>Food</option>
              <option>Exercise</option>
              <option>General Health</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea
              class="form-control"
              id="message"
              name="message"
              placeholder="Hi! I'd like to know more about..."
              rows="9"
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.handleSubmitForm} lass="my-2 btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userID: state.auth.user.id,
  submitted: state.submitThread.submitSuccess,
  loading: state.submitThread.loading,
  errors: state.submitThread.errors
});

export default connect(
  mapStateToProps,
  { submitPost }
)(NewThread);
