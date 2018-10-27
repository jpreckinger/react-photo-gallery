import React, { Component } from 'react';

class GalleryItem extends Component {

  render() {
    return (
        <img src={this.props.galleryItem.path}
         alt={this.props.galleryItem.description}/>
    );
  }
}

export default GalleryItem;
