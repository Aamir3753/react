import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent'
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { connect } from 'react-redux';
import { fetchDishes, fetchPromos, fetchComments, fetchLeaders } from '../redux/actionCreaters';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}
const mapDispatchToProps = (dispatch) => ({
    fetchDishes: () => dispatch(fetchDishes()),
    resetFeedbackForm: () => dispatch(actions.reset("feedback")),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchComments: () => dispatch(fetchComments()),
    fetchLeaders: () => dispatch(fetchLeaders())
})
class Main extends Component {
    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchPromos();
        this.props.fetchComments();
        this.props.fetchLeaders();
    }
    render() {
        const HomePage = () => {
            return (
                <Home
                    dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesIsLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}
                    promosIsLoading={this.props.promotions.isLoading}
                    promosErrMess={this.props.promotions.errMess}
                    promotion={this.props.promotions.promos.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                    leadersIsLoading={this.props.leaders.loading}
                    leadersErrMess={this.props.leaders.errMess}

                />
            );
        }
        const DishWithId = ({ match }) => {
            return <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId))[0]}
                comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId))}
                isLoading={this.props.dishes.isLoading}
                errMess={this.props.dishes.errMess} />
        }
        return (
            <React.Fragment>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route path="/home" component={HomePage} />
                            <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes.dishes} isLoading={this.props.dishes.isLoading} errMess={this.props.dishes.errMess} />} />
                            <Route path="/menu/:dishId" component={DishWithId} />
                            <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
                            <Route path="/aboutus" component={() => <About leaders={this.props.leaders.leaders} isLoading={this.props.leaders.loading} errMess={this.props.leaders.errMess} />} />
                            <Redirect to="/home" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </React.Fragment>
        )
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));