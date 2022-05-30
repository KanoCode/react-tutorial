import React from "react";
import InputTodo from "./InputTodo";
import {v4 as uuidv4} from "uuid"


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
  componentDidUpdate(prevProps, prevState) {
    if(prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos)
      localStorage.setItem("todos", temp)
    }
  }

  componentDidMount() {
    const temp = localStorage.getItem("todos")
    const loadedTodos = JSON.parse(temp)
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos
      })
    }
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
  const newTodo = {
    id: uuidv4(),
    title: title,
    completed: false
  };
  this.setState({
    todos: [...this.state.todos, newTodo]
  });
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
