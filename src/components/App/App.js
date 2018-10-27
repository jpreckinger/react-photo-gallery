import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {

  state = {
    gallery: []
  };

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
  }

  componentDidMount() {
    console.log('In compDidMount');
    this.getGallery();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <ul>
          <GalleryList galleryList={this.state.gallery} />
          {/* <img src="images/goat_small.jpg"/> */}
        </ul>
      </div>
    );
  }
}

export default App;
