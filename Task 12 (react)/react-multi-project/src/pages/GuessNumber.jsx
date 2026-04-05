import React from "react";
import "./pages.css";

class GuessNumber extends React.Component {
  constructor() {
    super();
    this.random = Math.floor(Math.random() * 10);
    this.state = { input: "", result: "" };
  }

  check = () => {
    if (parseInt(this.state.input) === this.random) {
      this.setState({ result: "Success" });
    } else {
      this.setState({ result: "Fail" });
    }
  };

  render() {
    return (
      <div className="page">
        <input placeholder="guess the number" onChange={(e) => this.setState({ input: e.target.value })} />
        <button onClick={this.check}>Check</button>
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default GuessNumber;