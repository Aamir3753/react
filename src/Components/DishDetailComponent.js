import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
class DishDetail extends Component {
    showSelectedDish() {
        if (this.props.dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-6">
                        <Card>
                            <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-6">
                    <h2>Comments</h2>
                        {this.props.dish.comments.map((com,index) => {
                            return (
                                <ul key={index} className="list-unstyled">
                                    <li>{com.comment}</li>
                                    <li>-- {com.name} {com.date}</li>
                                </ul>
                            )
                        })}
                    </div>
                </div>
            );
        }
        else {
            return <div></div>
        }
    }
    render() {
        return this.showSelectedDish();
    }
}
export default DishDetail;