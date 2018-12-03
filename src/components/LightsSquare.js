import React, { Component } from 'react';

class LightsSquare extends Component {
    render() {
        return (
            <div className="LightsSquare-container">
                <div className="topHalf">
                    <div className="Square red"></div>
                    <div className="Square green"></div>                
                </div>
                <div className="bottomHalf">
                    <div className="Square blue"></div>
                    <div className="Square purple"></div>
                </div>
            </div>
        );
    }
}

export default LightsSquare;