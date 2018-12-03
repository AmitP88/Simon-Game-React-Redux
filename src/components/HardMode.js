import React, { Component } from 'react';

class HardMode extends Component {
    render() {
        return(
            <div className="HardMode-container">
                <label className="easy">Easy</label>
                <label className="switch hardmode">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <label className="hard">Hard</label>
            </div>
        );
    }
}

export default HardMode;