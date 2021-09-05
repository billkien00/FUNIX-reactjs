import React, { Component } from 'react';
import MenuComponent from './components/MenuComponent';
import { Navbar, NavbarBrand  } from 'reactstrap';
import './App.css';
import {DISHES} from './shared/dishes'


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       dish : DISHES
    }
  }
  

  render() {
    return (
      <div>
       <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">this is lab 2</NavbarBrand>
            
          </div>
      </Navbar>
      <MenuComponent dishes={this.state.dish} />
    </div>
    );
  }
}

export default App;