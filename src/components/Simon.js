import React, { Component } from 'react';
import { connect } from 'react-redux';

class Simon extends Component {
    render() {
        return (
            <h1 className={this.props.Simon}>Simon</h1>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        Simon: state.SimonReducer.Simon
    }
}

export default connect(mapStateToProps)(Simon);