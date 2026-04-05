import React from "react";
import "./pages.css";

class TodoState extends React.Component {
  constructor() {
    super();
    this.state = {
      task: "",
      list: [],
      editIndex: -1,
      editText: ""
    };
  }

  addTask() {
    if (!this.state.task.trim()) return;

    const newTask = {
      text: this.state.task,
      done: false
    };

    this.setState({
      list: [...this.state.list, newTask],
      task: ""
    });
  }

  deleteTask(index) {
    const updated = this.state.list.filter((_, i) => i !== index);
    this.setState({ list: updated });
  }

  toggleTask(index) {
    const updated = [...this.state.list];
    updated[index].done = !updated[index].done;
    this.setState({ list: updated });
  }

  startEdit(index) {
    this.setState({
      editIndex: index,
      editText: this.state.list[index].text
    });
  }

  saveEdit(index) {
    const updated = [...this.state.list];
    updated[index].text = this.state.editText;

    this.setState({
      list: updated,
      editIndex: -1,
      editText: ""
    });
  }

  render() {
    return (
      <div className="page">
        <h2>Todo List</h2>

        {/* Input */}
        <div className="todo-input">
          <input
            type="text"
            placeholder="Enter task..."
            value={this.state.task}
            onChange={(e) => this.setState({ task: e.target.value })}
          />
          <button onClick={() => this.addTask()}>Add</button>
        </div>

        {/* List */}
        <ul className="todo-list">
          {this.state.list.map((item, index) => (
            <li key={index} className="todo-item">

              {this.state.editIndex === index ? (
                <>
                  <input
                    value={this.state.editText}
                    onChange={(e) =>
                      this.setState({ editText: e.target.value })
                    }
                  />
                  <button onClick={() => this.saveEdit(index)}>
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span
                    className={item.done ? "done" : ""}
                    onClick={() => this.toggleTask(index)}
                  >
                    {item.text}
                  </span>

                  <div className="todo-actions">
                    <button onClick={() => this.startEdit(index)}>
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => this.deleteTask(index)}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}

            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoState;