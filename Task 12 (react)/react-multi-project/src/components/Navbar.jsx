import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="page">
        <Link to="/">String</Link> |
        <Link to="/char">Char</Link> |
        <Link to="/timer">Timer</Link> |
        <Link to="/password">Password</Link> |
        <Link to="/clock">Clock</Link> |
        <Link to="/guess">Guess</Link> |
        <Link to="/basic">BasicCalc</Link> |
        <Link to="/calc">Calc</Link> |
        <Link to="/gst">GST</Link> |
        <Link to="/todo">Todo</Link> |
        <Link to="/todo-local">TodoLS</Link> |
        <Link to="/form">Form</Link> |
        <Link to="/form-local">FormLS</Link> |
        <Link to="/api">API</Link> |
        <Link to="/weather">Weather</Link> |
        <Link to="/movie">Movie</Link> |
        <Link to="/news">News</Link> |
        <Link to="/currency">Currency</Link> |
        <Link to="/theme">Theme</Link>
      </div>
    );
  }
}

export default Navbar;