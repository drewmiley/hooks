import React, { Component } from 'react';

const getProduct = (count, random, loops) => {
    for (let i = 0; i < loops; i++) {
        console.log(`component computing expensive function looping ${loops} times`)
    }
    return count * random;
}

export default class V12 extends Component {
    constructor(props) {
        super(props);
        this.state = { value: NaN, trigger: false, loops: 100, product: () => getProduct(props.count, props.random, 100) };
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.loops !== prevState.loops) {
            this.setState({ product: () => getProduct(this.props.count, this.props.random, this.state.loops) })
        }
        if (this.state.trigger !== prevState.trigger) {
            this.setState({ value: this.state.product() })
        }
    }

    render() {
        return (
            <>
                <h2>Component V12</h2>
                <p>
                    <span>Count * Random: {this.state.value}</span>
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
