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
            <Components.V3 {...this.props} />
            <Hooks.V3 {...this.props} />
            <Components.V4 />
            <Hooks.V4 />
            <Components.V5 {...this.props} />
            <Hooks.V5 {...this.props} />
            <Components.V6 {...this.props} />
            <Hooks.V6 {...this.props} />
        </div>
    }
};

export default connect(state => state, mapDispatchToProps)(App);
