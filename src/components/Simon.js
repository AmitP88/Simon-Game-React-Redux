import React, { Component } from 'react';
import { connect } from 'react-redux';

class Simon extends Component {
    render() {
        return (
            <h1 className={this.props.Simon}>{this.props.SimonMessage}</h1>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        Simon: state.SimonReducer.Simon,
        SimonMessage: state.SimonMessageReducer.SimonMessage
    }
}

export default connect(mapStateToProps)(Simon);