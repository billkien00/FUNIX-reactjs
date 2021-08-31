import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import StaffList from './components/StaffList'
import { STAFFS } from './shared/staffs'
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      staff : STAFFS
    }
  }
  

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <StaffList staffs={this.state.staff}></StaffList>
       
      </div>
    );
  }
}

export default App;