import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
function showSelectedDish(props) {
    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <Card>
                            <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
                            <CardBody>
                                <CardTitle>{props.dish.name}</CardTitle>
                                <CardText>{props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-6">
                        <h2>Comments</h2>
                        {props.dish.comments.map((com, index) => {
                            return (
                                <ul key={index} className="list-unstyled">
                                    <li>{com.comment}</li>
                                    <li>-- {com.name} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(com.date)))}</li>
                                </ul>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
    else {
        return <div></div>
    }
}
function DishDetail(props) {
    return showSelectedDish(props);
}
export default DishDetail;