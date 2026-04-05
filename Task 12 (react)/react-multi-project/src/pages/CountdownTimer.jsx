import React from "react";
import "./pages.css";

class CountdownTimer extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.interval = null;
  }

  start = () => {
    this.interval = setInterval(() => {
      if (this.state.count < 10) {
        this.setState({ count: this.state.count + 1 });
      } else {
        clearInterval(this.interval);
      }
    }, 1000);
  };

  stop = () => {
    clearInterval(this.interval);
    this.setState({ count: 0 });
  };

  pause = () => {
    clearInterval(this.interval);
  };

  render() {
    return (
      <div className="page">
        <h2>Timer</h2>
        <p>{this.state.count}</p>
        <button onClick={this.start}>Start</button>
        <button onClick={this.pause}>Pause</button>
        <button onClick={this.stop}>Stop</button>
      </div>
    );
  }
}

export default CountdownTimer;