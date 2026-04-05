import React from "react";
import "./pages.css";

class BasicCalc extends React.Component {
  constructor() {
    super();
    this.state = { a: "", b: "", result: 0 };
  }

  calculate(type) {
    let a = parseFloat(this.state.a) || 0;
    let b = parseFloat(this.state.b) || 0;

    if (type === "add") this.setState({ result: a + b });
    if (type === "sub") this.setState({ result: a - b });
    if (type === "mul") this.setState({ result: a * b });
    if (type === "div") this.setState({ result: a / b });
  }

  render() {
    return (
      <div className="page">
        <input onChange={(e) => this.setState({ a: e.target.value })} />
        <input onChange={(e) => this.setState({ b: e.target.value })} />
        <button onClick={() => this.calculate("add")}>+</button>
        <button onClick={() => this.calculate("sub")}>-</button>
        <button onClick={() => this.calculate("mul")}>*</button>
        <button onClick={() => this.calculate("div")}>/</button>
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default BasicCalc;