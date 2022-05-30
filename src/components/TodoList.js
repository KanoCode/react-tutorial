import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem key={todo.id}  handleDelete={this.props.handleDelete} setUpdate={this.props.setUpdate} handleChangeProps={this.props.handleChangeProps} todo={todo} />
        ))}
      </ul>
    );
  }
}

export default TodoList;
