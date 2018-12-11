import React from 'react';
import { Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent';
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
function DishDetail(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
            </div>
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
                    {props.comments.map((com) => {
                        return (
                            <ul key={com.id} className="list-unstyled">
                                <li>{com.comment}</li>
                                <li>-- {com.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(com.date)))}</li>
                            </ul>
                        )
                    })}
                    <CommentForm />
                </div>
            </div>
        </div>
    );
}
export default DishDetail;