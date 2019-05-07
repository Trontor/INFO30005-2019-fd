import React, { Component } from "react";
import axios from "axios";
import Loading from "../../Loading/Loading";
import "./ViewThread.css";
import ThreadPost from "./ThreadPost/ThreadPost";

class ViewThread extends Component {
  state = {
    data: ""
  };
  componentWillMount() {
    const id = this.props.match.params.id;
    console.log(id);
    // Load the post information from API endpoint
    axios.get("../../api/thread/" + id).then(res => {
      this.setState({ data: res.data });
    });
  }
  render() {
    if (!this.state.data) {
      return <Loading />;
    }
    console.log(this.state.data);
    const { content, name, datePosted } = this.state.data;
    return (
      <div id="threadContainer" className="col-6 offset-3">
        <div className="hr-sect">Original Post</div>
        <ThreadPost
          parent
          imgSrc={
            "http://www.gravatar.com/avatar/bcca61946853d9a44f122f8bd42ad323?s=200&r=pg&d=mm"
          }
          content={content}
          name="Kevin Joshi"
          date={datePosted}
        />
        <div class="hr-sect">Replies</div>
        <ThreadPost
          content={
            "The confusion about 'fruit' and 'vegetable' arises because of the differences in usage between scientists and cooks. Scientifically speaking, a tomato is definitely a fruit. True fruits are developed from the ovary in the base of the flower, and contain the seeds of the plant (though cultivated forms may be seedless). Blueberries, raspberries, and oranges are true fruits, and so are many kinds of nut. Some plants have a soft part which supports the seeds and is also called a 'fruit', though it is not developed from the ovary: the strawberry is an example."
          }
          imgSrc={
            "https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-1/c15.0.50.50a/p50x50/1379841_10150004552801901_469209496895221757_n.jpg?_nc_cat=1&_nc_ht=scontent-syd2-1.xx&oh=bee13fee1daa2a5cd1747c15cb083ff5&oe=5D632857"
          }
          name="Giselle Leung"
          date={datePosted}
        />
      </div>
    );
  }
}

export default ViewThread;
