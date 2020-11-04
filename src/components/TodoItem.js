import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  // use arrow methods because it auto-binds this

  render() {
    // destructure this.props.todo because it's redundant to repeat
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
            // .bind() function is used to pass id parameter up to App.js
          />{" "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            x
          </button>
        </p>
      </div>
    );
  }
}

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

// this.props.markComplete is used to 'go up the staircase' to the Todos and then
// the App.js file so that the actual list of todos in state can be accessed and changed
//
// above also features an in-line styling format, which can format each object
//s
// below line helps make what properties are in TodoItem obvious
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
