import React from 'react';
import {Container,Row,Col} from 'reactstrap'
const Subscribs = () => (
    <footer className="app1 subscribe bg">
        <Container>
            <Row className="justify-content-center">
                <Col lg="6">
                    <div className="title title1">
                        <div className="main-title">
                            <h2>Subscribe to our newsletter</h2>
                        </div>
                        <div className="sub-title">
                            <p className="para">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been
                        </p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col lg="8">
                    <div className="subscribe">
                        <div className="center-content">
                            <div className="form-group">
                                <div className="d-flex position-relative">
                                    <input className="form-control " maxLength="45" name="email"
                                        placeholder="Please Enter Your Email Address" type="email" />
                                    <div className="button-primary">
                                        <button className=" btn btn-default btn-gradient text-white text-uppercase"
                                            type="submit">subscribe
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <div className="socials-lists m-t-50">
                        <ul className="socials-horizontal justify-content-center">
                            <li>
                                <a href="https://www.facebook.com/">
                                    <i aria-hidden="true" className="fa fa-facebook center-content"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/">
                                    <i aria-hidden="true" className="fa fa-twitter center-content"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://accounts.google.com/">
                                    <i aria-hidden="true" className="fa fa-google center-content"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/">
                                    <i aria-hidden="true" className="fa fa-instagram center-content"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
)


export default Subscribs;