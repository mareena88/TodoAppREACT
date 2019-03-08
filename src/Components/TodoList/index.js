import React from "react";
import Uniqueid from "uniqid";

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.list.map(item => (
            <li key={Uniqueid()}> {item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
