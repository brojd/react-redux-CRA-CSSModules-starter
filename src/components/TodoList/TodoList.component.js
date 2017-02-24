import React, { PropTypes } from 'react';

const TodoList = ({ todos, onTodoClick }) => {
  
  const handleTodoClick = (id) => {
    onTodoClick(id);
  };
  
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} onClick={() => handleTodoClick(todo.id)}>{todo.name}</li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  onTodoClick: PropTypes.func
};

export default TodoList;
