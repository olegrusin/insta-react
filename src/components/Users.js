import React, { Component } from 'react';
import User from './User';
import ErrorMessage from './ErrorMessage';
import InstaService from '../services/instaservice';

export default class Users extends Component {
    InstaService = new InstaService();
    state = {
        users: [],
        error: false,
        loading: false
    }

    componentDidMount() {
        this.updateUsers();
    }
    
    updateUsers() {
        this.setState({loading: true});
        this.InstaService.getAllPosts()
        .then(this.onUsersLoaded)
        .catch(this.onError)
    }

    onUsersLoaded = (users) => {
        this.setState({
            users,
            error: false,
            loading: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }

    renderItem(arr) {
        
        return arr
            .filter((item, index, self) =>
                index === self.findIndex(el => el.name === item.name)
            )
            .map(item => {
            const {name, altname, photo, id} = item;

            return (
                <div key={id}>
                    <User 
                        src={photo}
                        alt={altname}
                        name={name}
                        min/>
                </div>
            )    

        })
    }


    render() {
        const {error, users} = this.state;
        if(error) {
            return <ErrorMessage />
        }

        const items = this.state.loading ? "loading..." : this.renderItem(users);

        return (
            <div className="right">
                <User 
                    src="https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
                    alt="username"
                    name="Oleg Rusin" />
                <div className="users__block">
                    {items}
                </div>
            </div>
        )
    }
}