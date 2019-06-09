import React, { Component } from 'react';
import ErrorMessage from './ErrorMessage';
import Loading from './Loading';
import InstaService from '../services/instaservice';

class Palette extends Component {
    InstaService = new InstaService();
    state = {
        photos: [],
        error: false,
        loading: false
    }

    componentDidMount() {
        this.updatePhotos();
    }

    updatePhotos() {
        this.setState({loading: true});
        this.InstaService.getAllPhotos()
        .then(this.onPhotosLoaded)
        .catch(this.onError)
    }

    onPhotosLoaded = (photos) => {
        this.setState({
            photos,
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
        return arr.map(item => {
            const {src, alt, id} = item;

            return (
                <img src={src} alt={alt} id={id}></img>
            )    

        })
    }

    render() {
        const {error, photos} = this.state;
        if(error) {
            return <ErrorMessage />
        }

        const items = this.state.loading ? <Loading /> : this.renderItem(photos)

        return (
            <div className="palette">
                {items}
            </div>
        );
    }
}

export default Palette;