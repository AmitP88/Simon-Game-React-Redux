import React, { Component } from 'react';

class OnOffSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            on: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        if(this.state.on === false) {
            this.setState({ 
             on: true 
            }, () => console.log(this.state.on));
        } else if (this.state.on === true) {
            this.setState({
             on: false
            }, () => console.log(this.state.on));
        }
        
    }

    render() {
        return (
            <div className="OnOffSwitch-container">
                <label className="Off-label">Off</label>
                <label className="switch">
                    <input type="checkbox" onChange={this.handleChange} />
                    <span className="slider round"></span>
                </label>
                <label className="On-label">On</label>
            </div>
        );
    }
}

export default OnOffSwitch;