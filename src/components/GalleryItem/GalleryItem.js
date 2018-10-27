import React, { Component } from 'react';
import './GalleryItem.css'

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
        const isClicked = this.state.isClicked;
        return (
            <div className='box'>
                {isClicked ? (
                    <p onClick={this.handleClick}>{this.props.galleryItem.description}</p>
                ) : (
                    <p><img onClick={this.handleClick} src={this.props.galleryItem.path}
                    alt={this.props.galleryItem.description}/></p>
                )}
            </div>
        );
    }
}

export default GalleryItem;
