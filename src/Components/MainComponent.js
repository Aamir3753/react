import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from './MenuComponent';
import { DISHES } from '../Shared/dishes';
import { LEADERS } from '../Shared/leaders';
import { PROMOTIONS } from '../Shared/promotions';
import { COMMENTS } from '../Shared/comments'
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent'
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };
    }
    render() {
        const HomePage = () => {
            return (
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }
        const DishWithId = ({ match }) => {
            return <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId))[0]}
                comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId))}
            />
        }
        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route exact path="/contactus" component={Contact} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </React.Fragment>
        )
    }
}
export default Main;
{/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.selectDish(dishId)} />
        <DishDetail dish={this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0]} /> */}
                                    // selectDish(dishId) {
                                    //     this.setState({
                                    //         selectedDish: dishId
                                    //     })
                                    // }