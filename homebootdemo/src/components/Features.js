import React from 'react';
import ModernDesign from '../assets/modern-design.png';
import './features.css';
 function Features() {
    return (
        <div>
             <section>
  <div className="row text-center">
    <div className="col-sm-3 mt" />
    <div className="col-sm-2 mt">
      <div className="card">
        <img src={ModernDesign} className="card-img-top card-img" />
        <div className="card-body">
          <h5 className="card-title">EASILY CUSTOMISED</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
    <div className="col-sm-2 mt">
      <div className="card">
        <img src={ModernDesign} className="card-img-top card-img" />
        <div className="card-body">
          <h5 className="card-title">RESPONSIVE READY</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
    <div className="col-sm-2 mt">
      <div className="card">
        <img src={ModernDesign} className="card-img-top card-img" />
        <div className="card-body">
          <h5 className="card-title">MODERN DESIGN</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
    <div className="col-sm-3 mt" />
  </div></section><br/>
  <section>
  <div className="row text-center">
    <div className="col-sm-3 mt" />
    <div className="col-sm-2 mt">
      <div className="card">
        <img src={ModernDesign} className="card-img-top card-img" />
        <div className="card-body">
          <h5 className="card-title">CLEAN CODE</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
    <div className="col-sm-2 mt">
      <div className="card">
        <img src={ModernDesign} className="card-img-top card-img" />
        <div className="card-body">
          <h5 className="card-title">READY TO SHIP</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
    <div className="col-sm-2 mt">
      <div className="card">
        <img src={ModernDesign} className="card-img-top card-img" />
        <div className="card-body">
          <h5 className="card-title">DOWNLOAD FOR FREE</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
    <div className="col-sm-3 mt" />
  </div></section>
        </div>
    )
}
export default Features;