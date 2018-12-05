import React, { Component } from 'react';
import {
    // when light square is clicked
    redClicked,
    greenClicked, 
    blueClicked, 
    purpleClicked,

    // revert square back to dark color after click
    redReverted,
    greenReverted,
    blueReverted,
    purpleReverted
} from '../actions/LightSquareActions';
import store from '../store/store';
import { connect } from 'react-redux';

class LightsSquare extends Component {
    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(e) {
        e.preventDefault();
        
        switch(e.target.id){
            case 'red':
                store.dispatch(redClicked());
                setTimeout(() => {
                    store.dispatch(redReverted());
                }, 300);
                break;
            case 'green':
                store.dispatch(greenClicked());
                setTimeout(() => {
                    store.dispatch(greenReverted());
                }, 300);
                break;
            case 'blue':
                store.dispatch(blueClicked());
                setTimeout(() => {
                    store.dispatch(blueReverted());
                }, 300);
                break;
            case 'purple':
                store.dispatch(purpleClicked());
                setTimeout(() => {
                    store.dispatch(purpleReverted());
                }, 300);
                break;
            default:
                console.log(e.target.id);
                break;
        }
    }

    render() {
        // console.log(store.getState());
        return (
            <div className="LightsSquare-container">
                <div className="topHalf">
                    <div id="red" className={this.props.LightSquares.red} onClick={this.props.OnOffSwitch ? this.handleOnClick : this.props.disabled}></div>
                    <div id="green" className={this.props.LightSquares.green} onClick={this.props.OnOffSwitch ? this.handleOnClick : this.props.disabled}></div>                
                </div>
                <div className="bottomHalf">
                    <div id="blue" className={this.props.LightSquares.blue} onClick={this.props.OnOffSwitch ? this.handleOnClick : this.props.disabled}></div>
                    <div id="purple" className={this.props.LightSquares.purple} onClick={this.props.OnOffSwitch ? this.handleOnClick : this.props.disabled}></div>
                </div>
            </div>
        );
    }
}

export const mapStateToProps = (state) => {
    console.log(state);

    return {
        LightSquares: state.LightsSquareReducer.lightSquares,
        OnOffSwitch: state.OnOffSwitchReducer.on
    }
}

export default connect(mapStateToProps)(LightsSquare);