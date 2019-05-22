import React, { Component } from "react";
import axios from "axios";
import Loading from "../../Loading/Loading";
import "./Quiz.scss";
import StarpopUp from "../StarpopUp/StarpopUp";
import ReactCardFlip from "react-card-flip";

class Quiz extends Component {
  state = {
    data: undefined,
    selected: "A",
    isFlipped: false,
    correct: false
  };
  componentWillMount() {
    this.id = this.props.match.params.id;
    const URL = "../../api/quiz/" + this.id;
    axios.get(URL).then(res => {
      this.setState({ data: res.data });
    });
  }
  completeQuiz = () => {
    axios.post("../../api/student/items/complete/", { id: this.id }).then(res => {
      if (res.status === 200) {
        this.props.history.push("/dashboard");
      }
    });
  };

  verifyAnswer = () => {
    const correct = this.state.selected === this.state.data.answer;
    if (!correct) {
      alert("That answer was incorrect :(\nTry again!");
    } else {
      this.setState({ correct: true, isFlipped: true });
      setTimeout(this.completeQuiz, 1000);
    }
  };
  render() {
    if (!this.state.data) {
      return <Loading />;
    }
    const { title, content, optionA, optionB, optionC, optionD, starAward } = this.state.data;
    const options = [
      {
        name: "A",
        text: optionA
      },
      {
        name: "B",
        text: optionB
      },
      {
        name: "C",
        text: optionC
      },
      {
        name: "D",
        text: optionD
      }
    ];
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
        <div className="row" key="front">
          <div className="col-lg-4 offset-lg-4 col-md-12 my-5 text-center">
            <h1 id="question">Quiz: {title}</h1>
          </div>
          <div className="col-lg-6 offset-lg-3 col-md-12 my-5 text-center">
            <h3 id="quizcontent">{content}</h3>
          </div>
          <div className="col-lg-4 offset-lg-4 col-md-12 my-5 text-center">
            <hr />
            <div className="funky-radio text-left">
              {options.map(({ name, text }) => (
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id={name}
                    name="quiz"
                    checked={this.state.selected === name}
                    onChange={() => this.setState({ selected: name })}
                  />
                  <label class="custom-control-label" for={name}>
                    {text}
                  </label>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="btn btn-success"
              onClick={this.verifyAnswer}
              herf="#"
              id="add-thread"
            >
              Submit
            </button>
          </div>
        </div>
        <div key="back">
          <StarpopUp value={starAward} />
        </div>
      </ReactCardFlip>
    );
  }
}

export default Quiz;
