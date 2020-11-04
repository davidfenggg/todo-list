import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends React.Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

// below line helps make what properties are in Todos obvious
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};

// access props passed down by parents with this.props.NAME
//
// .map() function acts like for each loop and iterates through lists
export default Todos;
