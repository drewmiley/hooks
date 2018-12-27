import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as Components from './components';
import * as Hooks from './hooks';

import { mapDispatchToProps } from './ducks/actions';

class App extends Component {
    render() {
        return <div>
            <Components.V0 {...this.props} />
            <Hooks.V0 {...this.props} />
            <Components.V1 />
            <Hooks.V1 />
            <Components.V2 {...this.props} />
            <Hooks.V2 {...this.props} />
        </div>
    }
};

export default connect(state => state, mapDispatchToProps)(App);
