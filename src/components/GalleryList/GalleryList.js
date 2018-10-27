import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {

  render() {
    return (
        <div>
            {
                this.props.galleryList.map( image =>
                    <section key={image.id}>
                        <GalleryItem galleryItem={image} />
                    </section>
                )
            } 
        </div>
    );
  }
}

export default GalleryList;
