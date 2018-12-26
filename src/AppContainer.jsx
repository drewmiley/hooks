import React, { Component } from 'react';
import { connect } from 'react-redux';

import SimpleText from './components/SimpleText';

import { mapDispatchToProps } from './ducks/actions';

class App extends Component {
    render() {
        console.log(this.props);
        return <div>
            <SimpleText />
        </div>
    }
};

export default connect(state => state, mapDispatchToProps)(App);
