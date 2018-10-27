import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    gallery: []
  };

  getGallery = () => {
    axios.get('/gallery').then((response)
      this.setState({
        gallery: [response]
      })
      console.log(state.gallery);
    ).catch((error) =>{
      console.log('error getting gallery', error);
    })
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
  }
}

export default App;
