import React from "react";
import "./pages.css";

class PasswordToggle extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  toggle = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div className="page">
        <h2>Password Toggle</h2>
        <input type={this.state.show ? "text" : "password"} />
        <button onClick={this.toggle}>Toggle</button>
      </div>
    );
  }
}

export default PasswordToggle;