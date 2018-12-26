import React, { Component } from 'react'

export default class V0 extends Component {
    render() {
        return (
            <>
                <h2>V0</h2>
                <p>
                    <span>Count: {this.props.count}</span>
                    <span><button onClick={this.props.setCount}>Set Count</button></span>
                </p>
                <p>
                    <span>Random: {this.props.random}</span>
                    <span><button onClick={this.props.fetchRandom}>Fetch Random</button></span>
                </p>
            </>
        );
    }
}
