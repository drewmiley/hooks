import React, { Component } from 'react'

export default class V6 extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.setCount = this.setCount.bind(this);
    }

    setCount(count) {
        this.setState({ count });
    }

    componentDidUpdate(prevProps) {
        if (this.props.count !== prevProps.count) {
            this.setCount(this.props.count);
        }
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
                    <span><button onClick={this.props.fetchRandom}>Fetch Random</button></span>
                </p>
            </>
        );
    }
}
