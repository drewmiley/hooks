import React, { Component } from 'react';

export default class V10 extends Component {
    componentDidMount() {
        console.log('component did mount');
    }

    componentDidUpdate() {
        console.log(`component did update - Count: ${this.props.count}`)
    }

    componentWillUnmount() {
        console.log('component will unmount');
    }

    render() {
        return (
            <>
                <h2>Component V10 - All three lifecycle methods that useEffect replicates</h2>
                <p>
                    <span>Count: {this.props.count}</span>
                    <span><button onClick={this.props.increment}>Increment</button></span>
                </p>
            </>
        );
    }
}
