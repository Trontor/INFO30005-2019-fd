import React, { Component } from "react";
import "./CommunityTab.scss";
import CommunityPostRow from "./CommunityPostRow/CommunityPostRow";
import { withRouter } from "react-router";
import Loading from "../../../Loading/Loading";

class CommunityTab extends Component {
  render() {
    const regularTable = (
      <div className="community-card">
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            this.props.history.push("/newThread");
          }}
          herf="#"
          id="add-thread"
        >
          +Add Thread
        </button>
        <div className="card  table-responsive">
          <table className="table table-hovor" id="community-table">
            <thead>
              <tr>
                <th scope="col">DATE</th>
                <th scope="col">TITLE</th>
                <th scope="col">AUTHOR</th>
                <th scope="col">REPLIES</th>
              </tr>
            </thead>
            <tbody>
              {this.props.threads.map(threadInfo => (
                <CommunityPostRow
                  id={threadInfo.id}
                  date={threadInfo.date}
                  title={threadInfo.title}
                  author={threadInfo.authorName}
                  replies={threadInfo.replies}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
    return (
      <div
        className="col-md-6 offset-md-3 col-12 offset-0 p-0 tab-pane active"
        id="nav-community"
        role="tabpanel"
        aria-labelledby="nav-community"
      >
        {regularTable}
      </div>
    );
  }
}

export default withRouter(CommunityTab);