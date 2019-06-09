import React, { Component } from 'react';
import ErrorMessage from './ErrorMessage';
import Loading from './Loading';
import InstaService from '../services/instaservice';
import User from './User';

class Posts extends Component {
    InstaService = new InstaService();
    state = {
        posts: [],
        error: false,
        loading: false
    }

    componentDidMount() {
        this.updatePosts();
    }

    updatePosts() {
        this.setState({loading: true});
        this.InstaService.getAllPosts()
        .then(this.onPostsLoaded)
        .catch(this.onError)
    }

    onPostsLoaded = (posts) => {
        this.setState({
            posts,
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
            .sort(function(a, b){
                var dateA=new Date(a.time), dateB=new Date(b.time)
                return dateB - dateA;
            })
            .map(item => {
            const {name, altname, photo, src, alt, descr, id, time} = item;

            return (
                <div key={id} className="post">
                    <User 
                        src={photo}
                        alt={altname}
                        name={name}
                        min/>
                    <img src={src} alt={alt}></img>
                    <div className="post__name">
                        {name}
                    </div>
                    <div className="post__descr">
                        {descr}
                    </div>
                    <div className="post__time">
                        {time.slice(0,10)}
                    </div>
                </div>
            )    

        })
    }

    render() {
        const {error, posts} = this.state;
        if(error) {
            return <ErrorMessage />
        }

        const items = this.state.loading ? <Loading /> : this.renderItem(posts);


        return (
            <div className="left">
                {items}
            </div>
        );
    }
}

export default Posts;