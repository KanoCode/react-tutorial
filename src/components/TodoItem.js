import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleEditing = this.handleEditing.bind(this);
    this.state = { editing: false };
  }
  handleEditing = () => {
    console.log("edit mode activated");
    this.setState({ editing: true });
  };
  handleUpdatedDone = event => {
    if(event.key === "Enter"){
      this.setState({ editing: false });
    }
  }
  render() {
    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = "none";
    } else {
      editMode.display = "none";
    }
    return (
      <li>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          {" "}
          <input
            type="checkbox"
            checked={this.props.todo.completed}
            onChange={() => {
              console.log();
              this.props.handleChangeProps(this.props.todo.id);
            }}
          />{" "}
          {this.props.todo.title}
          <button
            onClick={() => {
              this.props.handleDelete(this.props.todo.id);
            }}
          >
            Delete
          </button>
        </div>
        <input
          type="text"
          style={editMode}
          // className={styles.textInput}
          value={this.props.todo.title}
          onChange={(e) => {
            this.props.setUpdate(e.target.value, this.props.todo.id);
          }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
}

export default TodoItem;
