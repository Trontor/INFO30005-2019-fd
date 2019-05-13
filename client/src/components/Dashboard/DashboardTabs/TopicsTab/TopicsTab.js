import React from "react";
import "./TopicsTab.scss";
import TopicRow from "./TopicRow/TopicRow";

const TopicsTab = props => {
  return (
    <div
      className="tab-pane active col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-12 p-0 "
      id="nav-topics"
      role="tabpanel"
      aria-labelledby="nav-topics"
    >
      <div className="row">
        <div id="topics-container" className="w-100">
          <div id="accordion" className="accordion card-body">
            {/* Card for header */}
            {props.topics.map((topic, idx) => {
              let completed = 0;
              const total = topic.items.length;
              for (const item of topic.items) {
                item.completed = props.completedItems.includes(item.itemID);
                if (item.completed) completed++;
              }

              return (
                <TopicRow
                  topic={topic}
                  key={idx}
                  progress={((completed / total) * 100).toFixed(2)}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* <div className="accordion card-body courseCardBody" id="accordionExample">
        <div className="card">
          <div className="card-header" id="headingTwo">
            <h5 className="mb-0">
              <span>
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <i className="far fa-check-circle" />
                  Finished Course
                </button>
              </span>
              <font
                // style="float: right;
                //                 line-height: 1.5rem;
                //                 /* height: 1.5rem; 
                //                 display: inline-block;
                //                 vertical-align: middle;
                //                 padding: .375rem .75rem;"
              > 
                100%
              </font>
            </h5>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample"
          >
            <ol className="list-group">
              <li className="list-group-item list-group-item-success">
                <span>
                  <i className="far fa-newspaper fa-lg" />
                  Article title Fresh Food - Calories
                  <button
                    type="button"
                    className="coursebtn btn btn-info
                                                    btn-sm"
                  >
                    Start
                  </button>
                </span>
              </li>
              <li className="list-group-item list-group-item-success">
                <span>
                  <i className="far fa-newspaper fa-lg" />
                  Article title Fresh Food - Vegetable
                  <button
                    type="button"
                    className="coursebtn btn btn-info
                                                        btn-sm"
                  >
                    Start
                  </button>
                </span>
              </li>
              <li className="list-group-item list-group-item-success">
                <span>
                  <i className="far fa-play-circle fa-lg" />
                  Video title Fresh Food - Calories
                  <button
                    type="button"
                    className="coursebtn btn btn-info
                                                    btn-sm"
                  >
                    Start
                  </button>
                </span>
              </li>
              <li className="list-group-item list-group-item-success">
                <span>
                  <i className="far fa-edit fa-lg" />
                  Quiz
                  <button
                    type="button"
                    className="coursebtn btn btn-info
                                                    btn-sm"
                  >
                    Start
                  </button>
                </span>
              </li>
            </ol>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <button
                className="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <i className="far fa-circle" />
                Unfinished Course
              </button>
            </h5>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <ol className="list-group">
              <li className="list-group-item list-group-item-success">
                <span>
                  <i className="far fa-newspaper fa-lg" />
                  Article title Fresh Food - Calories
                  <button
                    type="button"
                    className="coursebtn btn btn-info
                                                btn-sm"
                  >
                    Start
                  </button>
                </span>
              </li>
              <li className="list-group-item ">
                <span>
                  <i className="far fa-newspaper fa-lg" />
                  Article title Fresh Food - Vegetable
                  <button
                    type="button"
                    className="coursebtn btn btn-info
                                                    btn-sm"
                  >
                    Start
                  </button>
                </span>
              </li>
              <li className="list-group-item">
                <span>
                  <i className="far fa-play-circle fa-lg" />
                  Video title Fresh Food - Calories
                  <button
                    type="button"
                    className="coursebtn btn btn-info
                                                btn-sm"
                  >
                    Start
                  </button>
                </span>
              </li>
              <li className="list-group-item">
                <span>
                  <i className="far fa-edit fa-lg" />
                  Quiz
                  <button
                    type="button"
                    className="coursebtn btn btn-info
                                                btn-sm"
                  >
                    Start
                  </button>
                </span>
              </li>
            </ol>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree">
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed
                                    disabled"
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <i className="fas fa-lock" />
                Locked Course
              </button>
            </h5>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionExample"
          >
            <ol className="list-group">
              <li className="list-group-item">
                <span>
                  <i className="far fa-newspaper fa-lg" />
                  Article title Fresh Food - Calories
                  <button
                    type="button"
                    className="coursebtn btn btn-info
                                                btn-sm"
                  >
                    Start
                  </button>
                </span>
              </li>
              <li className="list-group-item ">
                <span>
                  <i className="far fa-newspaper fa-lg" />
                  Article title Fresh Food - Vegetable
                  <button
                    type="button"
                    className="coursebtn btn btn-info
                                                    btn-sm"
                  >
                    Start
                  </button>
                </span>
              </li>
              <li className="list-group-item">
                <span>
                  <i className="far fa-play-circle fa-lg" />
                  Video title Fresh Food - Calories
                  <button
                    type="button"
                    className="coursebtn btn btn-info
                                                btn-sm"
                  >
                    Start
                  </button>
                </span>
              </li>
              <li className="list-group-item">
                <span>
                  <i className="far fa-edit fa-lg" />
                  Quiz
                  <button
                    type="button"
                    className="coursebtn btn btn-info
                                                btn-sm"
                  >
                    Start
                  </button>
                </span>
              </li>
            </ol>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default TopicsTab;
