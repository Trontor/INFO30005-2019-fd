import classnames from "classnames";
import React from "react";

const navigateToItem = (type, id) => {
  switch (type) {
    case "Video":
      break;
    case "Article":
      break;
    case "Quiz":
      break;
  }
  console.log("URL to " + type + " " + id);
};
const TopicRow = props => {
  const { name, items } = props.topic;
  return (
    <div className="card">
      <div id="collapse-header-A" className="card-header">
        <h5 className="mb-0 d-flex align-items-center">
          <span>
            <button
              class="btn btn-link collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseA"
              aria-expanded="false"
              aria-controls="collapseA"
            >
              <i class="far fa-check-circle" />x {name}
            </button>
          </span>
          <span className="topic-percentage ml-auto">{props.progress}%</span>
        </h5>
      </div>
      <div
        id="collapseA"
        className="collapse show"
        aria-labelledby="collapse-header-A"
        data-parent="#accordion"
      >
        <ol class="list-group">
          {items.map(item => (
            <li
              class={classnames("list-group-item", {
                "list-group-item-success": item.completed
              })}
            >
              <span>
                <i class="far fa-newspaper fa-lg" />
                {item.title}
                <button
                  type="button"
                  className="coursebtn btn btn-info btn-sm"
                  onClick={() => navigateToItem(item.type, item.itemID)}
                >
                  Start
                </button>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default TopicRow;
