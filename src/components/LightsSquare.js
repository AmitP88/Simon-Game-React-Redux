import React, { Component } from 'react';

class LightsSquare extends Component {
    constructor(props) {
        super(props);
        this.state = {
            red: 'dark_red',
            green: 'dark_green',
            blue: 'dark_blue',
            purple: 'dark_purple'
        }
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(e) {
        e.preventDefault();
        
        switch(e.target.id){
            case 'red':
                this.setState({
                    red: 'light_red'
                }, () => console.log(this.state.red));
                setTimeout(() => {
                    this.setState({
                        red: 'dark_red'
                    }, () => console.log(this.state.red));
                }, 300);
                break;
            case 'green':
                this.setState({
                    green: 'light_green'
                }, () => console.log(this.state.green));
                setTimeout(() => {
                    this.setState({
                        green: 'dark_green'
                    }, () => console.log(this.state.green));
                }, 300);
                break;
            case 'blue':
                this.setState({
                    blue: 'light_blue'
                }, () => console.log(this.state.blue));
                setTimeout(() => {
                    this.setState({
                        blue: 'dark_blue'
                    }, () => console.log(this.state.blue));
                }, 300);
                break;
            case 'purple':
                this.setState({
                    purple: 'light_purple'
                }, () => console.log(this.state.purple));
                setTimeout(() => {
                    this.setState({
                        purple: 'dark_purple'
                    }, () => console.log(this.state.purple));
                }, 300);
                break;
            default:
                console.log(e.target.id);
                break;
        }
    }

    render() {
        return (
            <div className="LightsSquare-container">
                <div className="topHalf">
                    <div id="red" className={this.state.red} onClick={this.handleOnClick}></div>
                    <div id="green" className={this.state.green} onClick={this.handleOnClick}></div>                
                </div>
                <div className="bottomHalf">
                    <div id="blue" className={this.state.blue} onClick={this.handleOnClick}></div>
                    <div id="purple" className={this.state.purple} onClick={this.handleOnClick}></div>
                </div>
            </div>
        );
    }
}

export default LightsSquare;