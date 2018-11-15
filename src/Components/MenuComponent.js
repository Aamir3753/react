import React, { Component } from 'react';
import { Card, CardTitle, CardImgOverlay, CardImg, CardBody, CardText } from 'reactstrap';
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    }
    selectDish(dish) {
        this.setState({ selectedDish:dish })
    }
    showSelectedDish() {
        if (this.state.selectedDish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={this.state.selectedDish.image} alt={this.state.selectedDish.name} />
                    <CardBody>
                        <CardTitle>{this.state.selectedDish.name}</CardTitle>
                        <CardText>{this.state.selectedDish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return <div></div>
        }
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
                <div className="row">
                    <div className="col-12">
                        {this.showSelectedDish()}
                    </div>
                </div>
            </div>
        )
    }
}
export default Menu;