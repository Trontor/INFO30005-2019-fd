import classnames from "classnames";
import React from "react";
import { withRouter } from "react-router-dom";

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
              <i
                className={classnames(
                  "far",
                  {
                    "fa-check-circle": props.progress === 100
                  },
                  {
                    "fa-circle": props.progress !== 100
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
                <i
                  className={classnames({
                    "far fa-newspaper fa-lg": item.type === "Article",
                    "far fa-play-circle fa-lg": item.type === "Video",
                    "far fa-edit fa-lg": item.type === "Quiz"
                  })}
                />
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

export default withRouter(TopicRow);
