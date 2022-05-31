import PropTypes from 'prop-types';
import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
  const {
    todos, handleDelete, setUpdate, handleChangeProps,
  } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          handleDelete={handleDelete}
          setUpdate={setUpdate}
          handleChangeProps={handleChangeProps}
          todo={todo}
        />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  handleChangeProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf().isRequired,
};

// you can also use.

// PropTypes.objectOf(PropTypes.any).isRequired

export default TodoList;
