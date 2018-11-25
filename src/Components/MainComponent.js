import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Menu from './MenuComponent';
import { DISHES } from '../shared';
// import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent'
import Footer from './FooterComponent';
import Home from './HomeComponent';

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
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />}/>
                    <Redirect to="/home"/>
                </Switch>
                    <Footer />
            </React.Fragment>
                )
            }
        }
        export default Main;
        {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.selectDish(dishId)} />
        <DishDetail dish={this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0]} /> */}