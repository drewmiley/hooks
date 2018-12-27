import React, { Component } from 'react'

export default class V1 extends Component {
    render() {
        return (
            <>
                <h2>Component V1</h2>
                <p>
                    <input type='text' placeholder='Input'></input>
                    <button onClick={() => console.log('value')}>Log Value</button>
                </p>
            </>
        );
    }
}
