import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    add = () => {
        this.setState((state) => ({
            count: state.count + 1
        }))
    }

    subtract = () => {
        this.setState((state) => ({
            count: state.count - 1
        }))
    }

    render() {
        return (
            <div>
                <h1>Counter:{this.state.count}</h1>
                <button onClick={this.subtract}>-</button>
                <button onClick={this.add}>+</button>
            </div>
        );
    }
}
export default Counter;