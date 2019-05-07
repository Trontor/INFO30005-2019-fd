import React from "react";
import "./CommunityTab.scss";
import CommunityPostRow from "./CommunityPostRow/CommunityPostRow";
import { withRouter } from "react-router";
const CommunityTab = props => {
  return (
    <div
      class="col-md-6 offset-md-3 col-12 offset-0 p-0 tab-pane active"
      id="nav-community"
      role="tabpanel"
      aria-labelledby="nav-community"
    >
      <div class="community-card">
        <button
          type="button"
          class="btn btn-success"
          onClick={() => {
            props.history.push("/newThread");
          }}
          herf="#"
          id="add-thread"
        >
          +Add Thread
        </button>
        <div class="card  table-responsive">
          <table class="table table-hovor" id="community-table">
            <thead>
              <tr>
                <th scope="col" />
                <th scope="col">
                  <i
                    class="fas fa-flag
                                                flag-info"
                  />
                </th>
                <th scope="col">DATE</th>
                <th scope="col">THREAD</th>
                <th scope="col">AUTHOR</th>
                <th scope="col">STATUS</th>
                <th scope="col">TOTAL POSTS</th>
              </tr>
            </thead>
            <tbody>
              <CommunityPostRow />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CommunityTab);
