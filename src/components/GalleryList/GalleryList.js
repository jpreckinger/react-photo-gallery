import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {

    componentDidMount() {
        console.log('PROPS', this.props.galleryList);
    }

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
