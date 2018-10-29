import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {

  state = {
    gallery: []
  };

  // method to retrieve the photos from the server
  // and store them in state.gallery
  getGallery = () => {
    axios.get('/gallery')
    .then((response) => {
      this.setState({
        gallery: response.data
      })
      console.log(this.state.gallery);
    }).catch((error) => {
      console.log('error getting gallery', error);
    })
  } // end getGallery

  // method to send to a photo's id to the server
  // to adjust the amount of likes on that particular photo
  loveIt = (id) => {
    console.log('In love it', id);
    axios({
      method: 'PUT',
      url: `/gallery/like/${id}`,
    }).then((response) => {
      this.getGallery();
    })
  } //end loveIt

  // method that runs when the component has mounted, which then
  // calls the getGallery method, appending the photos and other
  // relevent elements to the DOM
  componentDidMount() {
    console.log('In compDidMount');
    this.getGallery();
  } // end componentDidMount

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
          <GalleryList galleryList={this.state.gallery} // sending the photos into the other components
                      loveIt={this.loveIt} />
      </div>
    );
  }
}

export default App;
