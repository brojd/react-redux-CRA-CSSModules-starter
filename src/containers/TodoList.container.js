import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../actions/todos';
import { setFilter } from '../actions/todosFilter';
import AddTodoName from '../components/AddTodo/AddTodo.component';
import TodoList from '../components/TodoList/TodoList.component';
import FilterTodos from '../components/FilterTodos/FilterTodos.component';

class TodoListContainer extends Component {
  
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFilterChosen = this.handleFilterChosen.bind(this);
    this.handleTodoClick = this.handleTodoClick.bind(this);
  }
  
  handleSubmit(name) {
    this.props.addTodo({ name: name, completed: false });
  }
  
  handleFilterChosen(filter) {
    this.props.setFilter(filter);
  }
  
  handleTodoClick(id) {
    this.props.toggleTodo(id);
  }
  
  render() {
    const filters = ['ALL', 'COMPLETED', 'ACTIVE'];
    return (
      <div>
        <AddTodoName onSubmit={this.handleSubmit} />
        <TodoList currentFilter={this.props.currentFilter}
                  todos={this.props.todos}
                  onTodoClick={this.handleTodoClick}/>
        <FilterTodos filters={filters}
                     onFilterChosen={this.handleFilterChosen} />
      </div>
    )
  }
}

const filterTodos = (todos, filter) => {
  switch (filter) {
    case 'ALL':
      return todos;
    case 'COMPLETED':
      return todos.filter(todo => todo.completed);
    case 'ACTIVE':
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
};

const mapStateToProps = (state) => {
  return {
    todos: filterTodos(state.todos, state.todosFilter),
    currentFilter: state.todosFilter
  }
};

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
  setFilter
};

TodoListContainer.propTypes = {
  todos: PropTypes.array,
  currentFilter: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
