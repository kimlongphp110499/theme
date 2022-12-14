import React, { useState } from 'react';
import Layout from '../../containers/common/common-layout'
import Slider from 'react-slick';
import Lightbox from 'react-image-lightbox';
import { PortfolioDetail1Data } from '../../database/portfolio/database';
import { Container, Row, Col } from 'reactstrap';
import 'react-image-lightbox/style.css';

var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 992,
            settings: { slidesToShow: 2 }
        },
        {
            breakpoint: 575,
            settings: { slidesToShow: 1 }
        }
    ]
};
var settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
};

const PortfolioDetail1 = () => {

    const initilindex = { index: 0, isOpen: false }
    const [photoIndex, setPhotoIndex] = useState(initilindex)

    const onClickImg = (img, i) => {
        setPhotoIndex({ ...photoIndex, index: i, image: img, isOpen: true })
    }
    const onMoveNext = () => {
        const next = (photoIndex.index + 1) % PortfolioDetail1Data.length
        const test = PortfolioDetail1Data[(photoIndex.index + 1) % PortfolioDetail1Data.length]
        setPhotoIndex({ ...photoIndex, index: next, image: test.img })
    }
    const onMovePrev = () => {
        const prev = (photoIndex.index + PortfolioDetail1Data.length - 1) % PortfolioDetail1Data.length
        const test = PortfolioDetail1Data[(photoIndex.index + PortfolioDetail1Data.length - 1) % PortfolioDetail1Data.length];
        setPhotoIndex({ ...photoIndex, index: prev, image: test.img })
    }

    return (
        <Layout pathList={['portfolio details', 'container layout']} pathTitle="container layout">
            <section className="portfolio-section port-col zoom-gallery detail-page fullwidth-portfolio agency">
                <Container>
                    <Row className="m-0">
                        <Col xs="12" className="m-b-50 p-0">
                            <div className="slider-img">
                                <Slider className="owl-carousel owl-theme portfolio-header" {...settings1}>
                                    <div className="item">
                                        <img alt="" className="img-fluid" src="../assets/images/inner-page/blogs/1.jpg" />
                                    </div>
                                    <div className="item">
                                        <img alt="" className="img-fluid" src="../assets/images/inner-page/blogs/2.jpg" />
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                    <div>

                        <Container fluid={true} className="p-t-30 px-0">
                            <Row className="m-0">
                                <Slider className="portfolio-slider col-sm-12 p-0" {...settings}>
                                    {PortfolioDetail1Data.map((data, i) => {
                                        return (
                                            <div className="item" key={i}>
                                                <div className="isotopeSelector">
                                                    <div className="overlay">
                                                        <div className="border-portfolio">
                                                            <a className="zoom_gallery" data-source={data[photoIndex.index]}
                                                                href="#javascript" title="Into The Blue"  >
                                                                <img alt="" className="img-fluid blur-up lazyload" onClick={() => onClickImg(data.img, i)}
                                                                    src={data.img} />
                                                            </a>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </Slider>
                            </Row>
                            {

                                photoIndex.isOpen && (
                                    <>
                                        < Lightbox
                                            mainSrc={`${photoIndex?.image}`}
                                            nextSrc={`${PortfolioDetail1Data[(photoIndex.index + 1) % PortfolioDetail1Data.length].img}`}
                                            prevSrc={`${PortfolioDetail1Data[(photoIndex.index + PortfolioDetail1Data.length - 1) % PortfolioDetail1Data.length].img}`}
                                            imageTitle={photoIndex.index + 1 + "/" + PortfolioDetail1Data.length}
                                            onCloseRequest={() => setPhotoIndex({ ...photoIndex, isOpen: false })}
                                            onMovePrevRequest={onMovePrev}
                                            onMoveNextRequest={onMoveNext}
                                        />
                                    </>
                                )
                            }

                        </Container>
                        <Container className="m-t-50">
                            <Row>
                                <Col md="6">
                                    <div className="portfolio-detail">
                                        <h3 className="detail-head">project detail</h3>
                                        <div className="detail-container d-flex p-t-0">
                                            <div className="portfolio-left">
                                                <h5 className="text-start">client :</h5>
                                            </div>
                                            <div className="portfolio-right">
                                                <h5>john doe</h5>
                                            </div>
                                        </div>
                                        <div className="detail-container d-flex">
                                            <div className="portfolio-left">
                                                <h5 className="text-start">date :</h5>
                                            </div>
                                            <div className="portfolio-right">
                                                <h5>22 Nov 2022</h5>
                                            </div>
                                        </div>
                                        <div className="detail-container d-flex">
                                            <div className="portfolio-left">
                                                <h5 className="text-start">link :</h5>
                                            </div>
                                            <div className="portfolio-right">
                                                <h5>www.abcd.com</h5>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="6">
                                    <div className="portfolio-detail">
                                        <h3 className="detail-head">about project</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                            has been
                                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                            galley
                                            of type and scrambled it to make a type specimen book.</p>
                                        <div className="text-end m-t-10"><a className="btn btn-default primary-btn rounded-0" href="#">visit
                                            project</a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>

                {/* <!-- pagination Start --> */}
                <div className="pagination_sec">
                    <div className="content_detail__pagination cdp">
                        <ul>
                            <li><a className="prev" href="#"><i aria-hidden="true" className="fa fa-angle-double-left"></i></a></li>
                            <li><a className="active cdp_i" href="#">1</a></li>
                            <li><a className="cdp_i" href="#">2</a></li>
                            <li><a className="cdp_i" href="#">3</a></li>
                            <li><a className="next" href="#"><i aria-hidden="true" className="fa fa-angle-double-right"></i></a></li>
                        </ul>
                    </div>
                </div>
                {/* <!-- pagination End --> */}
            </section>
        </Layout>
    )
}

export default PortfolioDetail1;