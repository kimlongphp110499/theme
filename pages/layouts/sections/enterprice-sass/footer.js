import React from 'react';
import {Container,Row,Col,FormGroup,Input} from 'reactstrap'
const Footer = () => (
    <footer className="saas2 footer2" id="contact">
        <Container className="footer-padding">
            <Row>
                <Col lg="4" md="6" sm="12">
                    <div className="logo-sec">
                        <div className="footer-title mobile-title p-t-0">
                            <h3 className="text-white">About Us</h3>
                        </div>
                        <div className="footer-contant">
                            <img alt="" className="img-fluid footer-logo" style={{width: "20%"}} src="/assets/images/logo/N-LOGIN.png" />
                            <div className="footer-para">
                                <h6 className="text-white para-address"><h5 className="text-white">VNLogin Solutions Company Limited</h5></h6>
                                <h6 className="text-white para-address"><span style={{fontWeight:"normal"}} >Legal Office:</span> 46 Đường 54, P. Phú Hữu, TP. Thủ Đức, Hồ Chí Minh, Việt Nam 700000, </h6>
                                <h6 className="text-white para-address"><span style={{fontWeight:"normal"}} >Business Office:</span> SAV5, 28 Mai Chí Thọ, P. An Phú, TP. Thủ Đức, Hồ Chí Minh, Việt Nam 700000.</h6>
                            </div>
                            <ul className="d-d-flex footer-social social">
                                <li className="footer-social-list">
                                    <a href="https://www.facebook.com/"><i aria-hidden="true" className="fa fa-facebook"></i></a>
                                </li>
                                <li className="footer-social-list">
                                    <a href="https://twitter.com/"><i aria-hidden="true" className="fa fa-twitter"></i></a>
                                </li>
                                <li className="footer-social-list">
                                    <a href="https://accounts.google.com/"><i aria-hidden="true" className="fa fa-google"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>

                <Col lg="3" md="6" sm="12">
                    <div className="footer-title mobile-title">
                        <h3 className="text-white">Product</h3>
                    </div>
                    <div className="footer-contant">
                        <h5 className="footer-headings">Menu</h5>
                        <div>
                            <ul className="footer-lists">
                            <li>
                    <a href="/home">
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="/software">
                        <span>Software</span>
                    </a>
                </li>
                <li>
                    <a href="/services">
                        <span>Services</span>
                    </a>
                </li>
                <li>
                    <a href="/affiliate">
                        <span>Affiliate</span>
                    </a>
                </li>
                <li>
                    <a href="/blog">
                        <span>Blog</span>
                    </a>
                </li>
                <li>
                    <a href="/support-contact">
                        <span>Support Contact</span>
                    </a>
                </li>
                            </ul>
                        </div>
                    </div>
                </Col>

                <Col lg="2" md="6" sm="12">
                    <div className="footer-title mobile-title">
                        <h3 className="text-white">Company</h3>
                    </div>
                    <div className="footer-contant">
                        <h5 className="footer-headings">Company</h5>
                        <div>
                            <ul className="footer-lists">
                                <li>
                                    <a href="#">About us</a>
                                </li>
                                <li>
                                    <a href="#">About security</a>
                                </li>
                                <li>
                                    <a href="#">User guide</a>
                                </li>
                                <li>
                                    <a href="#">Terms of srvices</a>
                                </li>
                                <li>
                                    <a href="#">Privact policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col lg="3" md="6" sm="12">
                    <div className="footer-title mobile-title">
                        <h3 className="text-white">Subscribe our newsletter</h3>
                    </div>
                    <div className="footer-contant">
                        <h5 className="footer-headings">Subscribe our newsletter</h5>
                        <FormGroup className='form-group'>
                            <Input className="form-control" id="usr" placeholder="email address" type="text" />
                            <a href=""><i aria-hidden="true" className="fa fa-paper-plane"></i></a>
                        </FormGroup>
                        <div>
                            <h4 className="text-white Unice-text">VNLoginS</h4>
                            <h6 className="text-white Unice-copyright-text">© 2021-2022 VNLoginS Co,. LTD. All Rights Reserved</h6>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
)

export default Footer;