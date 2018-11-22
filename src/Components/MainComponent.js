import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared';
import DishDetail from './DishDetailComponent';
import { Navbar, NavbarBrand } from 'reactstrap';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }
    selectDish(dishId) {
        this.setState({
            selectedDish: dishId
        })
    }
    render() {
        return (
            <div>
                <Navbar dark color="dark">
                    <div className="container">
                        <NavbarBrand href="/">Restaurant</NavbarBrand>
                    </div>
                </Navbar>
                <div className="container">
                    <Menu dishes={this.state.dishes} onClick={(dishId) => this.selectDish(dishId)} />
                    <DishDetail dish={this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0]}/>
                </div>
            </div>
                )
            }
        }
export default Main;