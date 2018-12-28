import React, { Component } from 'react';

export default class V6 extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.setCount = this.setCount.bind(this);
        this.fetchRandomWithMultiplier = this.fetchRandomWithMultiplier.bind(this);
    }

    setCount(count) {
        this.setState({ count });
    }

    fetchRandomWithMultiplier() {
        this.props.fetchRandom(this.state.count);
    }

    render() {
        return (
            <>
                <h2>Component V6</h2>
                <p>
                    <span>Count: {this.state.count}</span>
                    <span><button onClick={() => this.setCount(this.state.count + 1)}>Increment</button></span>
                </p>
                <p>
                    <span>Random: {this.props.random}</span>
                    <span><button onClick={this.fetchRandomWithMultiplier}>Fetch Random</button></span>
                </p>
            </>
        );
    }
}
