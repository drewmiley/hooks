import React, { Component } from 'react';

export default class V8 extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [] };
    }

    async componentDidMount() {
        const response = await fetch('https://randomuser.me/api/?results=2');
        const json = await response.json();
        this.setState({ users: json.results });
    }

    render() {
        return (
            <>
                <h2>Component V8</h2>
                <ul>
                    {this.state.users.map((user, i) => (
                        <li key={i}>{user.name.title} {user.name.first} {user.name.last}</li>
                    ))}
                </ul>
            </>
        );
    }
}
