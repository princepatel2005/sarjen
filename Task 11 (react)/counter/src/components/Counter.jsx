import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    // Get value from localStorage (or default 0)
    const savedCount = localStorage.getItem("counter");

    this.state = {
      counter: savedCount ? parseInt(savedCount) : 0,
      msg: ""
    };
  }

  // Save to localStorage whenever state updates
  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
      localStorage.setItem("counter", this.state.counter);
    }
  }

  incrementData() {
    if (this.state.counter >= 10) {
      this.setState({ msg: "Sorry max 10" });
    } else {
      this.setState({
        counter: this.state.counter + 1,
        msg: ""
      });
    }
  }

  decrementData() {
    if (this.state.counter <= 0) {
      this.setState({ msg: "Sorry min 0" });
    } else {
      this.setState({
        counter: this.state.counter - 1,
        msg: ""
      });
    }
  }

  resetData() {
    this.setState({ counter: 0, msg: "" });
  }

  render() {
    return (
      <div className="counter-container">
        <div className="counter-box">
            <div className="counter-value">{this.state.counter}</div>
           
            <div className="btn-group">
                <button onClick={this.incrementData.bind(this)}>+</button>
                <button onClick={this.decrementData.bind(this)}>-</button>
                <button onClick={this.resetData.bind(this)}>Reset</button>
            </div>
            <div className="message">{this.state.msg}</div>
        </div>
      </div>
    );
  }
}

export default Counter;