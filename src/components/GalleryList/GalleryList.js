import React, { Component } from 'react';

class GalleryList extends Component {

    componentDidMount() {
        console.log('PROPS', this.props.galleryList);
    }

  render() {
    return (
        <div>
            {
                this.props.galleryList.map( image =>
                <li key={image.id}>
                    {image.description}
                </li>
                )
            } 
        </div>
    );
  }
}

export default GalleryList;
