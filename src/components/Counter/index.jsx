import "./counter.css";
import React from "react";

class Counter extends React.Component {
  state = { count: 0 , myInput : "0"};

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + Number.parseInt(this.state.myInput),
    }));
  };

  handleInput = (e) => {
    this.setState((prevState) => ({
      myInput: e.target.value,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count > 0 ? prevState.count - 1 : 0,
    }));
  };

  render() {
    return (
      <>
        <button onClick={this.decrement}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.increment}>+</button>
        <label htmlFor="num">Number Of Increment</label>
        <input id="num" type="text" onChange={this.handleInput} />
      </>
    );
  }
}

export default Counter;
