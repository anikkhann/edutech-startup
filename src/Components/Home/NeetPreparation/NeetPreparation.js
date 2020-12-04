import React from 'react';
import { Button } from 'react-bootstrap';
import carouselImg from '../../../logos/Presentation.jpg';
const NeetPreparation = () => {
    return (
        <div className="mt-5">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <h1 className="text-center"><span style={{ color: '#002db3' }}>NEET</span> Preparation</h1>
                <div className="carousel-inner mt-5">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={carouselImg} className="d-block w-70 img-fluid" style={{ border: '6px solid grey' }} alt="..." />
                                </div>
                                <div className="col-md-6 pt-5">
                                    <h4 className="text-center mt-4" style={{ color: '#002db3' }}>Micro concept videos</h4>
                                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint corrupti esse suscipit aut, debitis quasi laudantium exercitationem! Repellat, consectetur quaerat.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={carouselImg} className="d-block w-70 img-fluid" style={{ border: '6px solid grey' }} alt="..." />
                                </div>
                                <div className="col-md-6 pt-5">
                                    <h4 className="text-center mt-4" style={{ color: '#002db3' }}>Micro concept videos</h4>
                                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint corrupti esse suscipit aut, debitis quasi laudantium exercitationem! Repellat, consectetur quaerat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={carouselImg} className="d-block w-70 img-fluid" style={{ border: '6px solid grey' }} alt="..." />
                                </div>
                                <div className="col-md-6 pt-5">
                                    <h4 className="text-center mt-4" style={{ color: '#002db3' }}>Micro concept videos</h4>
                                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint corrupti esse suscipit aut, debitis quasi laudantium exercitationem! Repellat, consectetur quaerat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>

            </div>
            <div className="text-center mt-5">
                <Button style={{ width: '200px', borderRadius: '10px' }} variant="danger"> Clarify your doubts now!</Button>
            </div>
        </div>
    );
};

export default NeetPreparation;