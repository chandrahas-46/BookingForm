import React from "react";
import logo from "../Assets/image2.jpg";
// import styles from "./tesimonial.module.css";


export default function Testimonial() {

  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner" style={{ display: 'flex', flexWrap: 'nowrap', overflow: 'hidden' }}>
          <div className="carousel-item active">
            <div className="card-deck" style={{ display: 'flex', justifyContent: 'center' }}>
              {/* First Card */}
              <div className="card" style={{ width: '70%', marginRight: '15px',transition: 'transform 0.3s ease-in-out', }}>
                <img src={logo} className="card-img-top" alt="Card Image 1" />
                <div className="card-body">
                  <h5 className="card-title">Card Title 1</h5>
                  <p className="card-text">Some text for Card 1.</p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>

              {/* Second Card */}
              <div className="card" style={{ width: '70%', marginRight: '15px',transition: 'transform 0.3s ease-in-out', }}>
                <img src={logo} className="card-img-top" alt="Card Image 2" />
                <div className="card-body">
                  <h5 className="card-title">Card Title 2</h5>
                  <p className="card-text">Some text for Card 2.</p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>

              {/* Third Card */}
              <div className="card" style={{ width: '70%', marginRight: '15px',transition: 'transform 0.3s ease-in-out', }}>
                <img src={logo} className="card-img-top" alt="Card Image 3" />
                <div className="card-body">
                  <h5 className="card-title">Card Title 3</h5>
                  <p className="card-text">Some text for Card 3.</p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional carousel items can be added similarly */}

        </div>

        {/* Carousel controls */}
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}
