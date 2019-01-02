import React, { Component } from 'react';

import HeadingContext from '../HeadingContext';

class V13 extends Component {
    render() {
        return (
            <>
                <h2>Component V13 - {this.context}</h2>
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

V13.contextType = HeadingContext;

export default V13;
