import React, { PropTypes } from 'react';
import styles from './TodoList.stylesheet.css';

const TodoList = ({ todos, onTodoClick }) => {
  
  const handleTodoClick = (id) => {
    onTodoClick(id);
  };
  
  return (
    <ul className={styles.TodoList}>
      {todos.map((todo, index) => (
        <li key={index}
            onClick={() => handleTodoClick(todo.id)}
            className={styles.todo}>
          {index + 1}. {todo.name}
        </li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  onTodoClick: PropTypes.func
};

export default TodoList;
