import React, { Component } from 'react';
import './GalleryItem.css'

class GalleryItem extends Component {

    state = {
        isClicked: false
    }

    // method to set state for conditional rendering
    // allowing a user to click a photograph and have it
    // switch to displaying the text instead.
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
        
    } // end handleClick

    render() {
        const isClicked = this.state.isClicked;
        return (
            <div onClick={this.handleClick} className='box'>
                {isClicked ? (
                    <p>{this.props.galleryItem.description}</p>
                ) : (
                    <p><img onClick={this.handleClick} src={this.props.galleryItem.path}
                    alt={this.props.galleryItem.description}/></p>
                )}
            </div>
        );
    }
}

export default GalleryItem;
