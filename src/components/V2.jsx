import React, { Component } from 'react'

export default class V2 extends Component {
    constructor(props) {
        super(props);
        this.state = { colors: ['red', 'green', 'blue'], index: 0 };
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            const index = this.state.index === 2 ? 0 : this.state.index + 1;
            this.setState({ index });
        }
    }

    render() {
        return (
            <>
                <h2 style={{backgroundColor: this.state.colors[this.state.index]}}>Component V2</h2>
                <p>
                    <span>Count: {this.props.count}</span>
                    <span><button onClick={this.props.increment}>Increment</button></span>
                </p>
                <p>
                    <span>Random: {this.props.random}</span>
                    <span><button onClick={this.props.fetchRandom}>Fetch Random</button></span>
                </p>
            </>
        );
    }
}
