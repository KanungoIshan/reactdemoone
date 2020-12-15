import React from 'react';
import './ourteam.css';
import ProfileOne from '../assets/profile-one.jpg';
import ProfileTwo from '../assets/profile-two.jpg';
import ProfileThree from '../assets/profile-three.jpg';
import ProfileFour from '../assets/profile-four.jpg';
function OurTeam() {
    return (
        <div>

            <section>
                <div className="row text-center mb">
                    <div className="col-sm-2 mt" />
                    <div className="col-sm-2 mt">
                        <div className="card">
                            <img src={ProfileOne} className="card-img-top profile-img" alt="... " />
                            <div className="card-body ">
                                <h5 className="card-title">Ruth Woods</h5>
                                <h6 className="card-subtitle text-muted">FOUNDER,CEO</h6>
                                <p className="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <div className="card-body">
                                <button className="btn"><i className="fab fa-facebook-f" /></button>
                                {' '}<button className="btn"><i className="fab fa-twitter" /></button>
                                {' '}<button className="btn"><i className="fab fa-linkedin-in" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2 mt">
                        <div className="card">
                            <img src={ProfileTwo} className="card-img-top profile-img" alt="... " />
                            <div className="card-body ">
                                <h5 className="card-title">Timothy Reed</h5>
                                <h6 className="card-subtitle text-muted">CO-FOUNDER,DEVELOPER</h6>
                                <p className="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <div className="card-body">
                                <button className="btn"><i className="fab fa-facebook-f" /></button>
                                {' '}<button className="btn"><i className="fab fa-twitter" /></button>
                                {' '}<button className="btn"><i className="fab fa-linkedin-in" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2 mt">
                        <div className="card">
                            <img src={ProfileThree} className="card-img-top profile-img" alt="... " />
                            <div className="card-body ">
                                <h5 className="card-title">VICTORIA VALDEZ</h5>
                                <h6 className="card-subtitle text-muted">UI DESIGNER</h6>
                                <p className="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <div className="card-body">
                                <button className="btn"><i className="fab fa-facebook-f" /></button>
                                {' '}<button className="btn"><i className="fab fa-twitter" /></button>
                                {' '}<button className="btn"><i className="fab fa-linkedin-in" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2 mt">
                        <div className="card">
                            <img src={ProfileFour} className="card-img-top profile-img" alt="... " />
                            <div className="card-body ">
                                <h5 className="card-title">BEVERLY LITTLE</h5>
                                <h6 className="card-subtitle text-muted">DATA SCIENTIST</h6>
                                <p className="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <div className="card-body">
                                <button className="btn"><i className="fab fa-facebook-f" /></button>
                                {' '}<button className="btn"><i className="fab fa-twitter" /></button>
                                {' '}<button className="btn"><i className="fab fa-linkedin-in" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2 mt" />
                </div>
            </section>


        </div>
    )
}
export default OurTeam;