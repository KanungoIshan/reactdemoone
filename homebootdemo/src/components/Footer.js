import React from 'react'
import './footer.css';
export default function Footer() {
    return (
        <div>
            <footer className="mb">
  <div className="row mx" style={{backgroundColor: '#3A3E64'}}>
    <div className="col-sm-3 " />
    <div className="col-sm-2">
      <div className="card text-center">
        <div className="card-body ">
          <h5 style={{color: 'white', paddingTop: 10}} className="card-title ">LOCATION</h5>
          <address style={{color: '#5F627F'}} className="card-text ">Twitter, Inc.
            1355 Market St, Suite 900
            San Francisco, CA 94103</address>
        </div>
      </div>
    </div>
    <div className="col-sm-2 ">
      <div className="card text-center">
        <div className="card-body ">
          <h5 style={{color: 'white', paddingTop: 10}} className="card-title ">SHARE WITH LOVE</h5>
          <div className="card-body ">
            <button className="btn"><i className="fab fa-facebook-f" /></button>
            {' '}<button className="btn"><i className="fab fa-twitter" /></button>
            {' '}<button className="btn"><i className="fab fa-linkedin-in" /></button>
          </div>
        </div>
      </div>
    </div>
    <div className="col-sm-2">
      <div className="card text-center">
        <div className="card-body">
          <h5 style={{color: 'white', paddingTop: 10}} className="card-title">ABOUT ACTIVEBOX</h5>
          <p style={{color: '#5F627F'}} className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="row mx" style={{backgroundColor: '#313454'}}>
    <div style={{color: '#5F606D'}} className=" mt footer-copyright text-center">Copyright © 2020 ActiveBox. All Rights Reserved
      <p>Made by Ishan kanungo</p>
    </div>
  </div>
</footer>

        </div>
    )
}
