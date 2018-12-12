import React from 'react';
import { Card, CardTitle, CardImgOverlay, CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

function Menu(props) {
    if (props.isLoading) {
        return (
            <div className="conatiner">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    }
    else if (props.errMess) {
        return (
            <div className="conatiner">
                <div className="row">
                    <div className="col-12 ">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            </div>
        )
    }
    else {
        const menu = props.dishes.map(
            (dish) => {
                return (
                    <div key={dish.id} className="col-12 col-md-6 mt-2 mb-2">
                        <Link to={`/menu/${dish.id}`}>
                            <div>
                                <Card >
                                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                                </Card>
                                <CardImgOverlay>
                                    <CardTitle>{dish.name}</CardTitle>
                                </CardImgOverlay>
                            </div>
                        </Link>
                    </div>
                )
            }
        );
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Menu</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>

        )
    }
}
export default Menu;