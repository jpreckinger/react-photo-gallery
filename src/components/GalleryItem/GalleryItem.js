import React, { Component } from 'react';

class GalleryItem extends Component {

    state = {
        isClicked: false
    }

    handleClick = () => {
        console.log('icClicked before click is', this.state.isClicked);
        if(this.state.isClicked === false){
            this.setState({
                isClicked: true
            })
        } else {
            this.setState({
                isClicked: false
            })
        }
    }

    render() {
        return (
            <img onClick={this.handleClick} src={this.props.galleryItem.path}
            alt={this.props.galleryItem.description}/>
        );
    }
}

export default GalleryItem;
