import React from "react";
import "./ThreadPost.css";

const ThreadPost = props => {
  const dateFormat = isoDate => {
    var date = new Date(isoDate);
    return date
      .toLocaleString(undefined, {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      })
      .replace(",", " ");
  };
  return (
    <div
      id={props.parent ? "threadParent" : "threadReply"}
      className="thread-post card"
    >
      <div className="card-body">
        <div className="row">
          <div className="col-12 col-md-auto text-center">
            <div className="postUserInfo d-xs-inline">
              <img alt={props.name + " avatar"} src={props.imgSrc} />
              <div className="name">{props.name}</div>
              <div className="date">{dateFormat(props.date)}</div>
            </div>
          </div>
          <div className="col-12 col-md">
            {props.title && <div id="postTitle">{props.title}</div>}
            <div style={{ whiteSpace: "pre-wrap" }}>{props.content}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreadPost;
