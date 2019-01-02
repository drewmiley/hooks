import React, { useReducer } from 'react';

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

const V9 = props => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    return (
        <>
          <h2>Hooks V9 - useReducer used for setting internal state</h2>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        </>
    );
}

export default V9;
