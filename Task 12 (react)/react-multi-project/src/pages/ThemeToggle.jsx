import React from "react";
import "./pages.css";

class ThemeToggle extends React.Component {
  constructor() {
    super();
    this.state = { dark: false };
  }

  toggleTheme() {
    this.setState({ dark: !this.state.dark });
  }

    componentDidUpdate() {
    document.body.className = this.state.dark ? "dark" : "";
  } 

  render() {
    const style = {
      backgroundColor: this.state.dark ? "black" : "white",
      color: this.state.dark ? "white" : "black",
      height: "100vh",
      padding: "20px"
    };

    return (
      <div className="page" style={style}>
        <h2>Theme Toggle</h2>
        <button onClick={() => this.toggleTheme()}>
          Switch Theme
        </button>
      </div>
    );
  }
}

export default ThemeToggle;