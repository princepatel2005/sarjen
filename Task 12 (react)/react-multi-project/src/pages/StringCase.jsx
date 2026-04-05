import React from "react";
import "./pages.css";

class StringCase extends React.Component {
  constructor() {
    super();
    this.state = { text: "" };
  }

  render() {
    return (
      <div className="page">
        <h2>String Case</h2>
        <input onChange={(e) => this.setState({ text: e.target.value })} />
        <p>Upper: {this.state.text.toUpperCase()}</p>
        <p>Lower: {this.state.text.toLowerCase()}</p>
      </div>
    );
  }
}

export default StringCase;