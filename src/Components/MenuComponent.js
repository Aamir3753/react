import React, { Component } from 'react';
import { Card, CardTitle, CardImgOverlay, CardImg } from 'reactstrap';
class Menu extends Component {
    render() {
        const menu = this.props.dishes.map(
            (dish) => {
                return (
                    <div key={dish.id} className="col-12 col-md-6 mt-2 mb-2">
                        <div onClick={() => { this.props.onClick(dish.id) }}>
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
            <div className="row">
                {menu}
            </div>

        )
    }
}
export default Menu;