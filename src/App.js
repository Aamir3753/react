import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Components/MenuComponent';
import {DISHES} from './shared';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    }
  }
  render() {
    return (
      <div>
        <Navbar dark color="dark">
          <div className="container">
            <NavbarBrand href="/">Restaurant</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes ={this.state.dishes} />
      </div>
    );
  }
}

export default App;
