import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import AddTodo from "./components/AddTodo";
import axios from "axios";

class App extends React.Component {
  // state is cloud of data above all the components, and stuff is sent up
  // to change the state from the components
  state = {
    todos: [],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => this.setState({ todos: res.data }));
  }
  // fetch Todos from a backend - in this case, a JSON placeholder API
  // can use ?_limit=NUM to limit how much data

  // use this.setState() to change anything in the state
  // again, use .map() to iterate over an array like a for each loop!!
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // deletes one of the todos from the list
  // use .filter() method on an array to get rid of elements
  // in this case, we set todos to a copy of (...) the current todos array
  // and use that copy to filter out any todo item that has the same id.
  // The filter and map methods both work like for each loops
  // NOTE: the .filter() method KEEPS all todo objects that satisfy
  // the condition inside
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  onSubmit = (newTodo) => {
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo onSubmit={this.onSubmit} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

// Route exact displays ONLY what is on the current page
//
// pass a prop from the parent class into the component class
// by use of <Todos todos = {this.state.todos} />, where todos
// is now the prop and accessible by Todos

export default App;
