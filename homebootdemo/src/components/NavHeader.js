import React from 'react'
import './navheader.css';

function NavHeader() {
    return (
        <div>
        <section id="header">
    <div className="banner jumbotron text-center">
      <nav className="navbar navbar-default" role="navigation">
        <a className="navbar-brand" href="#">ACTIVE<strong>BOX</strong></a><strong>
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#"><b>FEATURES</b></a></li>
              <li><a href="#"><b>WORKS</b></a></li>
              <li><a href="#"><b>OUR TEAM</b></a></li>
              <li><a href="#"><b>TESTIMONIALS</b></a></li>
              <li><a href="#"><b>DOWNLOAD</b></a></li>
            </ul>
          </div>
        </strong></nav><strong>
        <div className="jumbotron-text">
          <h1>YOUR FAVORITE ONE PAGE <br />MULTI PURPOSE TEMPLATE</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p><br />
          <button type="button" className="btn btn-danger">FIND OUT MORE</button>
        </div>
      </strong></div><strong>
    </strong></section><strong>
  </strong>
        </div>
    )
}
export default NavHeader;