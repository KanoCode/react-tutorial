import PropTypes from 'prop-types';
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleEditing = this.handleEditing.bind(this);
    this.state = { editing: false };
  }

  handleEditing = () => {
    this.setState({ editing: true });
  };

  handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  };

  render() {
    const viewMode = {};
    const editMode = {};
    const { editing } = this.state;
    const {
      handleDelete, todo, handleChangeProps, setUpdate,
    } = this.props;
    if (editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }
    const { completed, id, title } = todo;
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          {' '}
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => {
              handleChangeProps(id);
            }}
          />
          {' '}
          {title}
          <button
            onClick={() => {
              handleDelete(id);
            }}
            type="button"
          >
            <FaTrash />
          </button>
        </div>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange={(e) => {
            setUpdate(e.target.value, id);
          }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
}
TodoItem.propTypes = {
  handleChangeProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  todo: PropTypes.objectOf().isRequired,

};

export default TodoItem;
