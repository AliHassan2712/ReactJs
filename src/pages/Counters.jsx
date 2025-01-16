import React from "react";
import MultipleCounters from "../components/MultipleCounters/";

class Counters extends React.Component {
    state = {
        countersArray: [
            { id: 1, count: 0, step: 1 },
            { id: 2, count: 0, step: 2 },
            { id: 3, count: 0, step: 3 },
            { id: 4, count: 0, step: 4 }
        ],
        totalCount: 0
    };

    onIncrement = (id, step) => {
        this.setState(prevState => {
            const updatedCounters = prevState.countersArray.map(item =>
                item.id === id ? { ...item, count: item.count + step } : item
            );
            return {
                countersArray: updatedCounters,
                totalCount: updatedCounters.reduce(
                    (total, item) => total + item.count,
                    0
                )
            };
        });
    };

    onDecrement = (id, step) => {
        this.setState(prevState => {
            const updatedCounters = prevState.countersArray.map(item =>
                item.id === id && item.count > 0
                    ? { ...item, count: item.count - step }
                    : item
            );
            return {
                countersArray: updatedCounters,
                totalCount: updatedCounters.reduce(
                    (total, item) => total + item.count,
                    0
                )
            };
        });
    };

    render() {
        return (
            <section>
                {this.state.countersArray.map(item => (
                    <MultipleCounters
                        key={item.id}
                        {...item}
                        onDecrement={() => this.onDecrement(item.id, item.step)}
                        onIncrement={() => this.onIncrement(item.id, item.step)}
                    />
                ))}
                <div className="total">Total is {this.state.totalCount}</div>
            </section>
        );
    }
}

export default Counters;
