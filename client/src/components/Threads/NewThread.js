import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { submitPost } from "../../actions/threadActions";
import classnames from "classnames";
import Loading from "../../components/Loading/Loading";

class NewThread extends Component {
  state = {
    title: "",
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
      title: this.state.title,
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
    const errors = this.props.errors;
    return (
      <div className="py-5 col-md-6 offset-md-3">
        <h1>New Community Post</h1>
        <form>
          <div className="form-group">
            <label htmlFor="title">Subject</label>
            <input
              className={classnames("form-control", {
                "is-invalid": errors.title
              })}
              id="title"
              name="title"
              aria-describedby="titleHelp"
              placeholder="Enter title"
              defaultValue={this.state.title}
              onChange={this.handleChange}
            />
            {errors.title && (
              <div className="invalid-feedback">{errors.title.kind}</div>
            )}
            <small id="titleHelp" className="form-text text-muted">
              What is your post about?
            </small>
          </div>
          <div className="form-group">
            <label>Topic</label>
            <select
              id="topic"
              name="topic"
              className="form-control"
              onChange={this.handleChange}
            >
              <option>Food</option>
              <option>Exercise</option>
              <option>General Health</option>
            </select>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              className={classnames("form-control", {
                "is-invalid": errors.content
              })}
              id="message"
              defaultValue={this.state.message}
              name="message"
              placeholder="Hi! I'd like to know more about..."
              rows="9"
              onChange={this.handleChange}
            />
            {errors.content && (
              <div className="invalid-feedback">{errors.content.kind}</div>
            )}
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
  userID: state.auth.user.id,
  submitted: state.submitThread.submitSuccess,
  loading: state.submitThread.loading,
  errors: state.submitThread.errors
});

export default connect(
  mapStateToProps,
  { submitPost }
)(NewThread);
