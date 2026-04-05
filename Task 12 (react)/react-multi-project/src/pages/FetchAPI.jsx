import React from "react";
import "./pages.css";

class FetchAPI extends React.Component {
  constructor() {
    super();
    this.state = { users: [] };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ users: data }));
  }

  render() {
    return (
      <div className="page">
        <h2>Users</h2>
        {this.state.users.map((u) => (
          <p key={u.id}>{u.name}</p>
        ))}
      </div>
    );
  }
}

export default FetchAPI;