import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from "../Components/Input";
import TodoList from "../Components/TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: []
    };
  }

  addTodo = item => {
    this.setState(state => ({ history: [...state.history, item] }));
  };

  deleteTodo = item => {
    this.setState(state => ({
      history: [...state.slice(0, item), ...state.slice(item + 1)]
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Input onAdd={this.addTodo} />
          <TodoList list={this.state.history} />
        </header>
      </div>
    );
  }
}

export default App;
