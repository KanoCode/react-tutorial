import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      title: '',
    };
  }

  // update parent container

  handleSubmit(e) {
    const { title } = this.state;
    const { addTodoProps } = this.props;
    e.preventDefault();
    if (title.trim()) {
      addTodoProps(title);
      this.setState({
        title: '',
      });
    }
  }

  // input handling, updates state
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { title } = this.state;
    return (
      <form className="form-container" onSubmit={this.handleSubmit}>
        <input
          value={title}
          onChange={this.onChange}
          type="text"
          name="title"
          className="input-text"
          placeholder="Add Todo..."
        />
        <button type="button" className="input-submit">
          {' '}
          <FaPlusCircle />
        </button>
      </form>
    );
  }
}
InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};
export default InputTodo;
