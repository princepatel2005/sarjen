import React from "react";
import "./pages.css";

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = { input: "" };
  }

  handle(val) {
    this.setState({ input: this.state.input + val });
  }

  calculate() {
    try {
      this.setState({ input: eval(this.state.input).toString() });
    } catch {
      this.setState({ input: "Error" });
    }
  }

  clear() {
    this.setState({ input: "" });
  }

  renderButton(val) {
    return (
      <button onClick={() => this.handle(val)}>
        {val}
      </button>
    );
  }

  render() {
    return (
      <div className="page">
        <h2>Calculator</h2>

        <input
          className="calc-display"
          value={this.state.input}
          readOnly
        />

        <div className="calc-grid">
          {this.renderButton("7")}
          {this.renderButton("8")}
          {this.renderButton("9")}
          {this.renderButton("/")}

          {this.renderButton("4")}
          {this.renderButton("5")}
          {this.renderButton("6")}
          {this.renderButton("*")}

          {this.renderButton("1")}
          {this.renderButton("2")}
          {this.renderButton("3")}
          {this.renderButton("-")}

          {this.renderButton("0")}
          {this.renderButton(".")}
          <button onClick={() => this.calculate()}>=</button>
          {this.renderButton("+")}

          <button className="full danger" onClick={() => this.clear()}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;