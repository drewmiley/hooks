import React, { Component } from 'react';

export default class V4 extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.setCount = this.setCount.bind(this);
    }

    setCount(count) {
        this.setState({ count });
    }

    componentDidMount() {
        console.log('component did mount');
        this.setCount(20);
    }

    componentDidUpdate() {
        console.log(`component did update`);
    }

    render() {
        return (
            <>
                <h2>Component V4 - Lifecycle method highlighting</h2>
                <p>
                    <span>Count: {this.state.count}</span>
                    <span><button onClick={() => this.setCount(this.state.count + 1)}>Increment</button></span>
                </p>
            </>
        );
    }
}
