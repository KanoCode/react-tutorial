import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputTodo from './InputTodo';

import TodoList from './TodoList';
import Header from './Header';

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
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { todos } = this.state;
    if (prevState.todos !== todos) {
      const temp = JSON.stringify(todos);
      localStorage.setItem('todos', temp);
    }
  }

  // Update state when user types

  /* eslint-disable no-param-reassign */
  handleChange(id) {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  }
  /* eslint-disable no-param-reassign */

  /* eslint-disable no-param-reassign */
  setUpdate = (updatedTitle, id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    });
  };
  /* eslint-enable no-param-reassign */

  handleDelete = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => todo.id !== id),
    });
  };

// form data
addTodoItem = (title) => {
  const { todos } = this.state;
  const newTodo = {
    id: uuidv4(),
    title,
    completed: false,
  };
  this.setState({
    todos: [...todos, newTodo],
  });
};

render() {
  const { todos } = this.state;
  return (
    <div>
      <Header />
      <InputTodo addTodoProps={this.addTodoItem} />
      <TodoList
        todos={todos}
        handleChangeProps={this.handleChange}
        handleDelete={this.handleDelete}
        setUpdate={this.setUpdate}
      />
      {' '}
    </div>
  );
}
}
export default TodoContainer;
