import React, { Component } from 'react';

const getProduct = (count, random) => {
    for (let i = 0; i < 100; i++) {
        console.log('component computing expensive function')
    }
    return count * random;
}

export default class V11 extends Component {
    constructor(props) {
        super(props);
        this.state = { trigger: false, loops: 100, product: getProduct(props.count, props.random) };
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.trigger !== prevState.trigger) {
            this.setState({ product: getProduct(this.props.count, this.props.random) })
        }
    }

    render() {
        return (
            <>
                <h2>Component V12</h2>
                <p>
                    <span>Count * Random: {this.state.product}</span>
                </p>
                <p>
                    <span>Loops: <input type="number" name="quantity" value={this.state.loops} onChange={(e) => this.setState({ loops: parseInt(e.target.value) })} min="1" max="1000000" /></span>
                </p>
                <p>
                    <span><button onClick={() => this.setState({ trigger: !this.state.trigger })}>Get Product</button></span>
                </p>
            </>
        );
    }
}
