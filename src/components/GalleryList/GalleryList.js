import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

class GalleryList extends Component {

  render() {
    return (
        <div>
            {
                this.props.galleryList.map( image =>
                    <section key={image.id} className="row">
                        <div className="column">
                            <GalleryItem galleryItem={image} />
                            <button onClick={() => this.props.loveIt(image.id)}>Love it!</button>
                            <p>{image.likes} people love this!</p> 
                        </div>
                    </section>
                )
            } 
        </div>
    );
  }
}

export default GalleryList;
