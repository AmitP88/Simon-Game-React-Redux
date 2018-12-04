import React, { Component } from 'react';

class LightsSquare extends Component {
    render() {
        return (
            <div className="LightsSquare-container">
                <div className="topHalf">
                    <div className="dark_red"></div>
                    <div className="dark_green"></div>                
                </div>
                <div className="bottomHalf">
                    <div className="dark_blue"></div>
                    <div className="dark_purple"></div>
                </div>
            </div>
        );
    }
}

export default LightsSquare;