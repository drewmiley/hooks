import React, { Component } from 'react'

export default class V3 extends Component {
    constructor(props) {
        super(props);
        this.state = { colors: ['red', 'green', 'blue'], index: 0, value: ''};
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({ value: e.target.value });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.value !== prevState.value || this.props.random !== prevProps.random) {
            const index = this.state.index === 2 ? 0 : this.state.index + 1;
            this.setState({ index });
        }
    }

    render() {
        return (
            <>
                <h2 style={{backgroundColor: this.state.colors[this.state.index]}}>Component V3</h2>
                <input type='text' placeholder='Input' value={this.state.value} onChange={this.onChange} />
            </>
        );
    }
}
