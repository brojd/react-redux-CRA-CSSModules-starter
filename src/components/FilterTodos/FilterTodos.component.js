import React, { PropTypes } from 'react';

const FilterTodos = ({ filters, onFilterChosen }) => {
  
  const handleFilterChosen = (filter) => {
    onFilterChosen(filter);
  };
  
  return (
    <ul>
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
