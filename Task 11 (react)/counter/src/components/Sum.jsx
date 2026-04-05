import React, { Component } from "react";

class Sum extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: "",
      num2: "",
      result: "",
      error: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    if (isNaN(value)) {
      this.setState({ error: "Enter valid number" });
      return;
    }

    this.setState({
      [name]: value,
      error: "",
      result: "",
    });
  };

  handleAdd = () => {
    const sum = parseInt(this.state.num1) + parseInt(this.state.num2);

    this.setState({ result: sum });
  };

  render() {
    return (
      <div className="card">
        <h3>Sum</h3>

        <input
          type="text"
          name="num1"
          placeholder="Enter first number"
          value={this.state.num1}
          onChange={this.handleChange}
        />

        <input
          type="text"
          name="num2"
          placeholder="Enter second number"
          value={this.state.num2}
          onChange={this.handleChange}
        />

        <button onClick={this.handleAdd}>Add</button>

        <p className="error">{this.state.error}</p>
        <p className="result">{this.state.result}</p>
      </div>
    );
  }
}

export default Sum;