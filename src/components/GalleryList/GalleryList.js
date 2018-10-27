import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

class GalleryList extends Component {

    componentDidMount() {
        console.log('PROPS', this.props.galleryList);
    }

  render() {
    return (
        <div>
            {
                this.props.galleryList.map( image =>
                    <section key={image.id} className="row">
                        <div className="column">
                            <GalleryItem galleryItem={image} />
                        </div>
                    </section>
                )
            } 
        </div>
    );
  }
}

export default GalleryList;
