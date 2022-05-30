import React, { Component } from "react";
import {FaPlusCircle} from 'react-icons/fa'

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      title: "",
    };
  }
  //input handling, updates state
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  //update parent container

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: "",
      });
    } else {
      alert("Please write item");
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.title}
          onChange={this.onChange}
          type="text"
          name="title"
          placeholder="Add Todo..."
        />
        <button className="input-submit"> <FaPlusCircle /></button>
      </form>
    );
  }
}
export default InputTodo;
