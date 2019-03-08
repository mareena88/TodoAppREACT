import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Type Here..."
    };
  }

  changeText = event => {
    const { value } = event.target;
    this.setState(state => ({
      value
    }));
  };

  onEnter = event => {
    if (event.keyCode === 13) {
      this.submitChange();
    }
  };

  submitChange = event => {
    this.props.onAdd(this.state.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.changeText}
          onKeyUp={this.onEnter}
        />
        <button onClick={this.submitChange}> Click Here </button>
      </div>
    );
  }
}

export default Input;
