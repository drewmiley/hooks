import React, { Component } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'reset':
      return { count: 0 };
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default class V9 extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.dispatch = this.dispatch.bind(this);
    }

    dispatch(action) {
        this.setState(reducer(this.state, action));
    }

    render() {
        return (
            <>
                <h2>Component V9 - Example use of reducer in setting internal state</h2>
                Count: {this.state.count}
                <button onClick={() => this.dispatch({ type: 'reset' })}>Reset</button>
                <button onClick={() => this.dispatch({ type: 'increment' })}>Increment</button>
                <button onClick={() => this.dispatch({ type: 'decrement' })}>Decrement</button>
            </>
        );
    }
}
