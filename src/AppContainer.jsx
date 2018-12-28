import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as Components from './components';
import * as Hooks from './hooks';

import { mapDispatchToProps } from './ducks/actions';

class App extends Component {
    render() {
        return (
            <>
                <div className='half-width'><Components.V0 {...this.props} /></div>
                <div className='half-width'><Hooks.V0 {...this.props} /></div>
                <div className='half-width'><Components.V1 /></div>
                <div className='half-width'><Hooks.V1 /></div>
                <div className='half-width'><Components.V2 {...this.props} /></div>
                <div className='half-width'><Hooks.V2 {...this.props} /></div>
                <div className='half-width'><Components.V3 {...this.props} /></div>
                <div className='half-width'><Hooks.V3 {...this.props} /></div>
                <div className='half-width'><Components.V4 /></div>
                <div className='half-width'><Hooks.V4 /></div>
                <div className='half-width'><Components.V5 {...this.props} /></div>
                <div className='half-width'><Hooks.V5 {...this.props} /></div>
                <div className='half-width'><Components.V6 {...this.props} /></div>
                <div className='half-width'><Hooks.V6 {...this.props} /></div>
                { this.props.count <= 5 && <div className='half-width'><Components.V7 {...this.props} /></div>}
                { this.props.count <= 5 && <div className='half-width'><Hooks.V7 {...this.props} /></div>}
                <div className='half-width'><Components.V8 /></div>
                <div className='half-width'><Hooks.V8 /></div>
                <div className='half-width'><Components.V9 /></div>
                <div className='half-width'><Hooks.V9 /></div>
                { this.props.count <= 5 && <div className='half-width'><Components.V10 {...this.props} /></div>}
                { this.props.count <= 5 && <div className='half-width'><Hooks.V10 {...this.props} /></div>}
                <div className='half-width'><Components.V11 {...this.props} /></div>
                <div className='half-width'><Hooks.V11 {...this.props} /></div>
                <div className='half-width'><Components.V12 {...this.props} /></div>
                <div className='half-width'><Hooks.V12 {...this.props} /></div>
            </>
        )
    }
};

export default connect(state => state, mapDispatchToProps)(App);
