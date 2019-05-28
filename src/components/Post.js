import React, { Component } from 'react';
import User from './User';

class Post extends Component {
    render() {
        return (
            <div className="post">
                <User 
                    src="https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
                    alt="username"
                    name="User Name"
                    min/>
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    name account
                </div>
                <div className="post__descr">
                    text text text text text text text text text text text text text text text text text text 
                </div>
            </div>
        );
    }
}

export default Post;