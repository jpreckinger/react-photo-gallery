import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

class GalleryList extends Component {

    // method to adjust the text on the DOM to be more gramitically accurate
    setText = (image) => {
        let amountOfLove = '';
        if(image === 0) {
            amountOfLove = 'Nobody loves this =(';
        } else if( image === 1){
            amountOfLove = '1 person loves this.';
        } else {
            amountOfLove = image + ' people love this!';
        }
        return amountOfLove;
    } // end setText

  render() {

    return (
        <div>
            {/* this will receive the gallery, iterate through it, and send each individual
            object through to the next component that will display it on the DOM. */}
            {   
                this.props.galleryList.map( image => 
                    <section key={image.id} className="row">
                        <div className="column">
                            <GalleryItem galleryItem={image} />
                            <button onClick={() => this.props.loveIt(image.id)}>Love it!</button>
                            <p>{this.setText(image.likes)}</p> 
                        </div>
                    </section>
                )
            } 
        </div>
    );
  }
}

export default GalleryList;
