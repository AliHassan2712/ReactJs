import Header from "../components/Header";
import Footer from "../components/Footer";
import Coun from "../components/Coun";
import React from "react";

class CounterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        { id: 1, count: 0, steps: 1 },
        { id: 2, count: 0, steps: 2 },
        { id: 3, count: 0, steps: 3 },
        { id: 4, count: 0, steps: 4 },
      ],
      total: 0,
    };
  }

  onIncrement = (id, steps) => {
    this.setState((prevState) => ({
      counters: prevState.counters.map((item) =>
        item.id === id ? { ...item, count: item.count + steps } : item
      ),
    }));
  };

  onDecrement = (id, steps) => {
    this.setState((prevState) => ({
      counters: prevState.counters.map((item) =>
        item.id === id && item.count > 0
          ? { ...item, count: item.count - steps }
          : item
      ),
    }));
  };

  componentDidUpdate(prevState) {
    const newTotal = this.state.counters.reduce(
      (acc, cur) => acc + cur.count,
      0
    );
    if (prevState.total !== newTotal) {
      this.setState({ total: newTotal });
    }
  }

  render() {
    return (
      <>
      
        <h2>Counter Page Page</h2>

        {this.state.counters.map((item) => (
          <Coun
            key={item.id}
            onIncrement={this.onIncrement}
            onDecrement={this.onDecrement}
            {...item}
          />
        ))}

        <div>Total is : {this.state.total}</div>
   
      </>
    );
  }
}

export default CounterPage;
