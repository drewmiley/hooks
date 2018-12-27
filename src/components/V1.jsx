import React, { Component } from 'react'

export default class V1 extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange(e) {
        this.setState({ value: e.target.value });
    }

    onClick() {
        console.log(this.state.value);
    }

    render() {
        return (
            <>
                <h2>Component V1</h2>
                <p>
                    <input type='text' placeholder='Input' value={this.state.value} onChange={this.onChange}></input>
                    <button onClick={this.onClick}>Log Value</button>
                </p>
            </>
        );
    }
}
