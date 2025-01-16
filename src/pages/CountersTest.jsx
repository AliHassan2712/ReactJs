import React from "react";
import Counter2 from "../components/Counter2/";
import Container from "../components/Container/";

class Counters extends React.Component {
    state = {
        countersArray: [
            { id: 1, count: 0, step: 1 },
            { id: 2, count: 0, step: 2 },
            { id: 3, count: 0, step: 3 }
        ]
    };

    onIncrement = (id, step) => {
        this.setState(prevState => ({
            countersArray: prevState.countersArray.map(item =>
                item.id === id ? { ...item, count: item.count + step } : item
            )
        }));
    };

    onDecrement = (id, step) => {
        this.setState(prevState => ({
            countersArray: prevState.countersArray.map(item =>
                item.id === id ? { ...item, count: item.count - step } : item
            )
        }));
    };

    render() {
        return (
            <section>
                <Container>
                    {this.state.countersArray.map(item => (
                        <Counter2
                            key={item.id}
                            {...item}
                            onIncrement={this.onIncrement}
                            onDecrement={this.onDecrement} // Pass onDecrement to Counter2
                        />
                    ))}
                    <hr />
                    <div>Total Increasing: tottal{this.props.count}</div>
                </Container>
            </section>
        );
    }
}

export default Counters;
