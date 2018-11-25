import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent'
import Footer from './FooterComponent';

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
            <React.Fragment>
                <Header />
                <div className="container">
                    <Menu dishes={this.state.dishes} onClick={(dishId) => this.selectDish(dishId)} />
                    <DishDetail dish={this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0]} />
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}
export default Main;