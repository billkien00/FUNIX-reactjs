import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import MainComponent from './components/MainComponent'

export default class App extends Component {
  render() {
    return (
      <Router>
        <MainComponent/>
      </Router>
    )
  }
}
