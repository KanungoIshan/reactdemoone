import React from 'react';
import './works.css';
import ProjectOne from '../assets/bg-project-one.jpg';
import ProjectTwo from '../assets/bg-project-two.jpg';
import ProjectThree from '../assets/bg-project-three.jpg';
import ProjectFour from '../assets/bg-project-four.jpg';
import ProjectFive from '../assets/bg-project-five.jpg';
import ProjectSix from '../assets/bg-project-six.jpg';
import ProjectSeven from '../assets/bg-project-seven.jpg';
import ProjectEight from '../assets/bg-project-eight.jpg';
 function Works() {
    return (
        <div>
            <section className="mt">
  <div className="row text-center mx">
    <div className="col-sm-3 kcontainer">
      <div className="kmiddle">
        <div className="koverlay">PROJECT NAME<br />User Interface Design</div>
      </div>
      <img src={ProjectOne} className="kimage" />
    </div>
    <div className="col-sm-3 kcontainer">
      <div className="kmiddle">
        <div className="koverlay">PROJECT NAME<br />Image Encryption</div>
      </div>
      <img src={ProjectTwo} className="kimage" alt="Image" />
    </div>
    <div className="col-sm-3 kcontainer">
      <div className="kmiddle">
        <div className="koverlay">PROJECT NAME<br />Weather Forecasting System</div>
      </div>
      <img src={ProjectThree} className="kimage" alt="Image" />
    </div>
    <div className="col-sm-3 kcontainer">
      <div className="kmiddle">
        <div className="koverlay">PROJECT NAME<br />Automated Payroll System</div>
      </div>
      <img src={ProjectFour} className="kimage" alt="Image" />
    </div>
  </div>
  <div className="row text-center mb mx">
    <div className="col-sm-3 kcontainer">
      <div className="kmiddle">
        <div className="koverlay">PROJECT NAME<br />AI Shopping System</div>
      </div>
      <img src={ProjectFive} className="kimage" alt="Image" />
    </div>
    <div className="col-sm-3 kcontainer">
      <div className="kmiddle">
        <div className="koverlay">PROJECT NAME<br />Bug Tracking</div>
      </div>
      <img src={ProjectSix} className="kimage" alt="Image" />
    </div>
    <div className="col-sm-3 kcontainer">
      <div className="kmiddle">
        <div className="koverlay">PROJECT NAME<br />E-Learning</div>
      </div>
      <img src={ProjectSeven} className="kimage" alt="Image" />
    </div>
    <div className="col-sm-3 kcontainer">
      <div className="kmiddle">
        <div className="koverlay">PROJECT NAME<br />Piracy Protection System</div>
      </div>
      <img src={ProjectEight} className="kimage" alt="Image" />
    </div>
  </div>
  <div className="row text-center">
  </div>
</section>

        </div>
    )
}
export default Works;