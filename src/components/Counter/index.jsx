import React from "react";
import "./counter.css";
class Counter extends React.Component {
    state = {
        counter: 0,
        myInput: ""
    };

    decrement = () => {
        this.setState(prevState => {
            if (prevState.counter > 0) {
                return {
                    counter: prevState.counter - this.state.myInput
                };
            }
        });
    };
    increment = () => {
        this.setState(prevState => {
            return { counter: prevState.counter + Number(this.state.myInput) };
        });
    };

    changeInput = event => {
        this.setState({
            myInput: event.target.value
        });
    };
    render() {
        return (
            <>
                <button className="dec" onClick={this.decrement}>
                    -
                </button>
                <p className="countNum">{this.state.counter}</p>
                <button className="inc" onClick={this.increment}>
                    +
                </button>
                <hr />
                <hr />
                <lable>Number of Incremnt:</lable>
                <input onChange={this.changeInput} type="text" />
            </>
        );
    }
}

export default Counter;
