import classnames from "classnames";
import React from "react";
import { withRouter } from "react-router-dom";

const starImg = require("../../../../../images/dashboard/star.png");
const TopicRow = props => {
  const navigateToItem = (type, id) => {
    switch (type) {
      case "Video":
        props.history.push(`/course/videos/` + id);
        break;
      case "Article":
        props.history.push(`/course/articles/` + id);
        break;
      case "Quiz":
        props.history.push(`/course/quiz/` + id);
        break;
      default:
        console.log("Couldn't navigate to unknown type: " + type);
        break;
    }
  };
  const idx = props.index;
  const { name, items } = props.topic;
  return (
    <div className="card">
      <div id={"collapse-header-" + idx} className="card-header">
        <h5 className="mb-0 d-flex align-items-center">
          <span>
            <button
              className="btn btn-link collapsed"
              type="button"
              data-toggle="collapse"
              data-target={"#collapse" + idx}
              aria-expanded="false"
              aria-controls={"collapse" + idx}
            >
              <i
                className={classnames(
                  "far",
                  {
                    "fa-check-circle": props.progress === "100.00"
                  },
                  {
                    "fa-circle": props.progress !== "100.00"
                  }
                )}
              />
              {name}
            </button>
          </span>
          <span className="topic-percentage ml-auto">{props.progress}%</span>
        </h5>
      </div>
      <div
        id={"collapse" + idx}
        className="collapse show"
        aria-labelledby={"collapse-header-" + idx}
        data-parent="#accordion"
      >
        <ol className="list-group">
          {items.map((item, idx) => (
            <li
              key={idx}
              className={classnames("list-group-item", {
                "list-group-item-success": item.completed
              })}
            >
              <span>
                <i
                  className={classnames({
                    "far fa-newspaper fa-lg": item.type === "Article",
                    "far fa-play-circle fa-lg": item.type === "Video",
                    "far fa-edit fa-lg": item.type === "Quiz"
                  })}
                />
                {item.title}
              </span>
              <div className="float-right">
                <span className="star-award">{item.starAward}</span>
                <img alt="Stars" className="star-img" src={starImg} />
                <button
                  type="button"
                  className="btn btn-info btn-sm"
                  onClick={() => navigateToItem(item.type, item.itemID)}
                >
                  Start
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default withRouter(TopicRow);
