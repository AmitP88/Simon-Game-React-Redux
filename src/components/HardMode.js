import React, { Component } from 'react';

class HardMode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hardmode: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        if(this.state.hardmode === false) {
            this.setState({ 
                hardmode: true 
            }, () => console.log(this.state.hardmode));
        } else if (this.state.hardmode === true) {
            this.setState({
                hardmode: false
            }, () => console.log(this.state.hardmode));
        }
    }

    render() {
        return(
            <div className="HardMode-container">
                <label className="easy">Easy</label>
                <label className="switch hardmode">
                    <input type="checkbox" onChange={this.handleChange} />
                    <span className="slider round"></span>
                </label>
                <label className="hard">Hard</label>
            </div>
        );
    }
}

export default HardMode;