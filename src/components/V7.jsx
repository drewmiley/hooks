import React, { Component } from 'react';

export default class V7 extends Component {
    componentDidMount() {
        console.log('component did mount');
    }

    componentWillUnmount() {
        console.log('component will unmount');
    }

    render() {
        return (
            <>
                <h2>Component V7</h2>
                <p>
                    <span>Count: {this.props.count}</span>
                    <span><button onClick={this.props.increment}>Increment</button></span>
                </p>
            </>
        );
    }
}
