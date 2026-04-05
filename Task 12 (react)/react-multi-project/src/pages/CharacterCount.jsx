import React from "react";
import "./pages.css";

class CharacterCount extends React.Component {
  constructor() {
    super();
    this.state = { text: "" };
  }

  render() {
    return (
      <div className="page">
        <h2>Character Count</h2>
        <input onChange={(e) => this.setState({ text: e.target.value })} />
        <p>Count: {this.state.text.length}</p>
      </div>
    );
  }
}

export default CharacterCount;