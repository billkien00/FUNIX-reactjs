import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainComponent from './components/MainComponent';


class App extends Component {
 
  

  render() {
    return (
      <BrowserRouter>
          <MainComponent/>
      </BrowserRouter>
    );
  }
}

export default App;