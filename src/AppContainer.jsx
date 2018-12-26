import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    V0
} from './components';

import { mapDispatchToProps } from './ducks/actions';

class App extends Component {
    render() {
        return <div>
            <V0 {...this.props} />
        </div>
    }
};

export default connect(state => state, mapDispatchToProps)(App);
