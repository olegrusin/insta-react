import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <div>
                <a href="/" className={this.props.min ? "user min" : "user"}>
                    <img src={this.props.src} alt={this.props.alt}></img>
                    <div>{this.props.name}</div>
                </a> 
            </div>
        );
    }
}

export default User;