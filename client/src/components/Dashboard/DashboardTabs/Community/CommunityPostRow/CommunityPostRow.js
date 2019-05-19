import React from "react";
import axios from "axios";

const CommunityPostRow = props => {
  const deleteThread = e => {
    e.preventDefault();
    const id = e.target.name;
    axios
      .delete(`api/thread/${id}`)
      .then(() => {
        document.location.reload();
      })
      .catch(err => {
        alert("Error deleting thread!\n" + err);
      });
  };
  const isoDateToString = isoDate => {
    const date = new Date(isoDate);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();

    if (dt < 10) {
      dt = "0" + dt;
    }
    if (month < 10) {
      month = "0" + month;
    }
    return `${dt}/${month}/${year}`;
  };
  const threadLink = `/community/threads/${props.id}`;
  return (
    <tr>
      {/* <td>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" />
          <label className="form-check-label" />
        </div>
      </td> */}
      <td>{isoDateToString(props.date)}</td>
      <td>
        <a href={threadLink}>{props.title}</a>
      </td>
      <td>{props.author}</td>
      <td>
        <span className="reply-number">{props.replies}</span>
      </td>
      {props.canDelete && (
        <td>
          <button name={props.id} className="btn-danger" onClick={deleteThread}>
            Delete
          </button>
        </td>
      )}
    </tr>
  );
};

export default CommunityPostRow;
