import React, { Component } from 'react';
import DishDetail from './DishDetailComponent';
import { Card, CardTitle, CardImgOverlay, CardImg } from 'reactstrap';
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    }
    selectDish(dish) {
        this.setState({
            selectedDish: dish
        })
    }
    render() {
        const menu = this.props.dishes.map(
            (dish) => {
                return (
                    <div key={dish.id} className="col-12 col-md-6 mt-2 mb-2">
                        <div onClick={() => { this.selectDish(dish) }}>
                            <Card >
                                <CardImg width="100%" src={dish.image} alt={dish.name} />
                            </Card>
                            <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </div>
                    </div>
                )
            }
        );
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <DishDetail selectedDish={this.state.selectedDish} />
            </div>
        )
    }
}
export default Menu;