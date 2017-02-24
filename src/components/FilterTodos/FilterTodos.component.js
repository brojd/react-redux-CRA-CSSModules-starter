import React, { PropTypes } from 'react';
import styles from './FilterTodos.stylesheet.css';

const FilterTodos = ({ filters, onFilterChosen }) => {
  
  const handleFilterChosen = (filter) => {
    onFilterChosen(filter);
  };
  
  return (
    <ul className={styles.FilterTodos}>
      {filters.map((filter, index) => (
        <button key={index} onClick={() => handleFilterChosen(filter)}>
          {filter}
        </button>
      ))}
    </ul>
  )
};

FilterTodos.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  onFilterChosen: PropTypes.func
};

export default FilterTodos;
