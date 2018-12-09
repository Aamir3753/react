import React from 'react';
import { Link } from 'react-router-dom';
import { FormGroup, Form, Input, Col, Breadcrumb, BreadcrumbItem, Button, Label, FormFeedback } from 'reactstrap';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel',
            message: '',
            toched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }
        }
    }
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState(
            {
                [name]: value
            }
        )
    }
    handleBlur = (feild) => () => {
        this.setState({ toched: { ...this.state.toched, [feild]: true } });
    }
    validate = (firstname, lastname, telnum, email) => {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        }
        if (this.state.toched.firstname && firstname.length < 3) {
            errors.firstname = "First name should be >= 3 characters";
        }
        else if (this.state.toched.firstname && firstname.length > 10) {
            errors.firstname = "First name should be <=10 characters";
        }
        if (this.state.toched.lastname && lastname.length < 3) {
            errors.lastname = "Last name should be >= 3 characters";
        }
        else if (this.state.toched.lastname && lastname.length > 10) {
            errors.lastname = "Last name should be <=10 characters";
        }
        const reg = /^\d+$/;
        if (this.state.toched.telnum && !reg.test(telnum)) {
            errors.telnum = "Tel. number should contain only numbers";
        }
        if (this.state.toched.email && email.split("").filter(x => x === "@").length !== 1) {
            errors.email = "Email should container only a @";
        }
        return errors;
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(this.state));
    }
    render() {
        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" href="/" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send Us Your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label md={2} htmlFor="firstname">First Name</Label>
                                <Col md={10}>
                                    <Input type="text" max={3} name="firstname" placeholder="First Name"
                                        value={this.state.firstname}
                                        onChange={this.handleInputChange}
                                        invalid={errors.firstname !== ""}
                                        valid={errors.firstname === "" && this.state.toched.firstname}
                                        onBlur={this.handleBlur("firstname")}
                                        id="firstname" />
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} htmlFor="lastname">First Name</Label>
                                <Col md={10}>
                                    <Input type="text" name="lastname" placeholder="Last Name"
                                        value={this.state.lastname}
                                        onBlur={this.handleBlur("lastname")}
                                        invalid={errors.lastname !== ""}
                                        valid={errors.lastname === "" && this.state.toched.lastname}
                                        onChange={this.handleInputChange}
                                        id="lastname" />
                                        <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} htmlFor="telnum">Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type="tel" name="telnum" placeholder="Tel."
                                        value={this.state.telnum}
                                        onBlur={this.handleBlur("telnum")}
                                        invalid={errors.telnum !== ""}
                                        valid={errors.telnum === "" && this.state.toched.telnum}
                                        onChange={this.handleInputChange}
                                        id="telnum" />
                                        <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} htmlFor="email">Email</Label>
                                <Col md={10}>
                                    <Input type="email" name="email" placeholder="Email"
                                        value={this.state.email}
                                        invalid={errors.email !== ""}
                                        onBlur={this.handleBlur("email")}
                                        valid={errors.email === "" && this.state.toched.email}
                                        onChange={this.handleInputChange}
                                        id="email" />
                                        <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree" placeholder="Last Name"
                                                value={this.state.agree}
                                                onChange={this.handleInputChange} /><strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input type="select" name="contactType"
                                        value={this.state.contactType}
                                        onChange={this.handleInputChange}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} htmlFor="message">Message</Label>
                                <Col md={10}>
                                    <Input type="textarea" rows="12" name="message"
                                        value={this.state.message}
                                        onChange={this.handleInputChange} id="message" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">Send Feedback</Button>
                                </Col>
                            </FormGroup>
                        </Form></div>
                </div>
            </div>
        );
    }

}

export default Contact; 