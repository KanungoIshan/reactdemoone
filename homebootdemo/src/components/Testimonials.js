import React from 'react';
import './testimonials.css';
import TestimonialBg from '../assets/testimonials-bg.jpg';
 function Testimonials() {
    return (
        <div>
            <section>
                <div id="myCarousel" className="carousel slide mt" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to={0} className="active" />
                        <li data-target="#myCarousel" data-slide-to={1} />
                        <li data-target="#myCarousel" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner">
                        <div className="item active">
                            <img src={TestimonialBg} className="carousel-img" />
                        </div>
                        <div className="item">
                            <img src={TestimonialBg} className="carousel-img" />
                        </div>
                        <div className="item">
                            <img src={TestimonialBg} className="carousel-img" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Testimonials;