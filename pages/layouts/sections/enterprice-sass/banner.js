import React from 'react';
import {Container,Row,Col} from 'reactstrap'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Slider from 'react-slick';

var settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const Banner = () => {
    const scrollToRef = (val) => {
        document.querySelector(`#${val}`).scrollIntoView({behavior: 'smooth' });
      }
        return(
    <section className="saas2 header" id="home">
        <div className="saas2-content ">
            <div className="bg saas2-bg">
                <Container>
                    <Row>
                        <Col lg="6" style={{"margin-left": "-105px;"}}>
                            <div className="center-text">
                                <div>
                                    <div className="header-text">
                                        <h1>VNLoginS Browser </h1>
                                    </div>
                                    <div className="header-text"  style={{"display": "flex"}}>
                                        <h2 style={{"display": "flex","font-weight": "100", "color": "#fff"}}>FOR POWERFUL  <h2 style={{"font-weight": "300","margin-left":"5px", "color": "#fff"}}>ANTI-DETECTION</h2>
                                        </h2>
                                       
                                    </div>
                                    <div className="header-sub-text">
                                        <p className="sub-para text-white">Synthesize all software on the market. Optimize & Upgrade perfect every day with a team of professionals in all industries. Build a foundation that any individual, team, or organization can use effectively.</p>
                                    </div>
                                    <a className="btn btn-default primary-btn transparent">Free Trial 7 Days Now</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6 center-text set-abs">
                              
                        <div className="container-fluid blog-sec detail2 p-0">
                        <Slider {...settings1}>
                        <img alt="" className="img-fluid img-dextop" src="/assets/images/saas2/frmHome 10_9_2022 9_31_32 PM.png" />
                        <img alt="" className="img-fluid img-dextop" src="/assets/images/saas2/frmHome 10_9_2022 9_31_40 PM.png" />
                        <img alt="" className="img-fluid img-dextop" src="/assets/images/saas2/frmHome 10_9_2022 9_31_59 PM.png" />
                        <img alt="" className="img-fluid img-dextop" src="/assets/images/saas2/frmHome 10_9_2022 9_34_46 PM.png" />
                        </Slider>
                        </div>
                        </Col>
                    </Row>
                </Container>

                <img alt="" className="img-fluid set-abs background-animate"
                    src="/assets/images/saas1/background2.png" />
                <img alt="" className="img-fluid set-abs img1 move-up-down"
                    src="/assets/images/saas2/header-icon/3.png" />
                <img alt="" className="img-fluid set-abs img2 move-right-left"
                    src="/assets/images/saas2/header-icon/2.png" />
                <img alt="" className="img-fluid set-abs img3 move-up-down"
                    src="/assets/images/saas2/header-icon/4.png" />
                <img alt="" className="img-fluid set-abs img4 move-up-down"
                    src="/assets/images/saas2/header-icon/5.png" />
                <img alt="" className="img-fluid set-abs img5 move-right-left"
                    src="/assets/images/saas2/header-icon/7.png" />
                <img alt="" className="img-fluid set-abs img6 move-up-down"
                    src="/assets/images/saas2/header-icon/9.png" />
                <img alt="" className="img-fluid set-abs img7 move-up-down"
                    src="/assets/images/saas2/header-icon/6.png" />
                <div className="set-abs round move-right-left">
                    <img alt="" className="img-fluid img8" src="/assets/images/saas2/header-icon/10.png" />
                    <div className="set-abs inner-circle">
                        <img alt="" className="img-fluid img9" src="/assets/images/saas2/header-icon/8.png" />
                    </div>
                </div>
                <div className="center-content set-abs bottom-content">
                    <div className="bottom">
                        <a className="down" onClick={()=>scrollToRef('feature')}>
                            <img alt="" className="img-fluid" src="/assets/images/saas2/header-icon/down.png" />
                        </a>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
        </div>
    </section>
)}
export default Banner;