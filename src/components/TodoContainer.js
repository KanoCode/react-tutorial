import React from "react";
import InputTodo from "./InputTodo";


import TodoList from "./TodoList";
import Header from "./Header";
class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  //Update state when user types
  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    });
  };
  handleChange(id) {
    const clickedItm = this.state.todos.filter(
      (todoItem) => todoItem.id === id
    )[0];
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  }

  handleDelete = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.id != id;
      }),
    });
  };
//form data
addTodoItem = title => {
  console.log(title);
};

  

  render() {
    return (
      <div>
        <Header />
        <InputTodo addTodoProps={this.addTodoItem}/>
        <TodoList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          handleDelete={this.handleDelete}
          setUpdate={this.setUpdate}
        />{" "}
      </div>
    );
  }
}
export default TodoContainer;
