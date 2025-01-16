import React from "react";
import "./multipleCounters.css";

class MultipleCounters extends React.Component {
    render() {
        const { onDecrement, onIncrement, count } = this.props;
        return (
            <div className="buttonsCounter">
                <button className="decrement" onClick={onDecrement}>
                    -
                </button>
                <p className="value">{count}</p>
                <button className="increment" onClick={onIncrement}>
                    +
                </button>
            </div>
        );
    }
}

export default MultipleCounters;
