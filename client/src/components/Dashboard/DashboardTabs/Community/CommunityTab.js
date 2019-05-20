import React, { Component } from "react";
import "./CommunityTab.scss";
import CommunityPostRow from "./CommunityPostRow/CommunityPostRow";
import { withRouter } from "react-router";
import classNames from "classnames";

class CommunityTab extends Component {
  render() {
    const { isTeacher } = this.props;
    const regularTable = (
      <div className={classNames("community-card", { "py-5": isTeacher })}>
        {!isTeacher && (
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
        )}
        <div>
          <table
            className="table-responsive table table-striped table-hover table-bordered"
            // id="community-table"
          >
            <thead>
              <tr className="bg-success">
                <th scope="col">DATE</th>
                <th scope="col">TITLE</th>
                <th scope="col">AUTHOR</th>
                <th scope="col">REPLIES</th>
                {isTeacher && <th scope="col">MANAGE</th>}
              </tr>
            </thead>
            <tbody>
              {this.props.threads.map((threadInfo, idx) => (
                <CommunityPostRow
                  key={idx}
                  id={threadInfo.id}
                  date={threadInfo.date}
                  title={threadInfo.title}
                  author={threadInfo.authorName}
                  replies={threadInfo.replies}
                  canDelete={isTeacher}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
    return (
      <div
        className={classNames(
          "col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-12 p-0 tab-pane",
          { active: this.props.isTeacher }
        )}
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
