import React from "react";
import "./pages.css"; // optional if using common styles

class DigitalClock extends React.Component {
  constructor() {
    super();
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer); // ✅ cleanup
  }

  render() {
    return (
      <div className="page">
        <h2>Digital Clock</h2>
        <h3>{this.state.time.toLocaleString()}</h3>
      </div>
    );
  }
}

export default DigitalClock;