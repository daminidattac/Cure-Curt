import React from 'react';
import "./OpinionCarousel.css";

const OpinionCarousel = () => {
  return (
    <div>
      <div id="slider">
        <input type="radio" name="slider" id="slide1" checked/>
        <input type="radio" name="slider" id="slide2"/>
        <input type="radio" name="slider" id="slide3"/>
        <div id="slides">
          <div id="overflow">
            <div className="inner">
              <div className="slide slide_1">
                <div className="slide-content">
                  <h2>DONOR OPINION</h2>
                  <p>I proudly donate blood regularly because it gives others something they desperately need to survive.
                 Knowing I can make a difference in someone else’s life makes me feel great!</p>
                  <h6>Brandon Munson</h6>
                  <span>CTO, Fulcrum Design, USA</span>
                </div>
              </div>
              <div className="slide slide_2">
                <div className="slide-content">
                  <h2>DONOR OPINION</h2>
                  <p>I have been a donor since high school. Although I have not been a donor every year, I always want to give to the human race. I love to help others! Moreover, it gives me real peace of mind.</p>
                  <h6>Brandon Munson</h6>
                  <span>CTO, Fulcrum Design, USA</span>
                </div>
              </div>
              <div className="slide slide_3">
                <div className="slide-content">
                  <h2>RECIPIENT OPINION</h2>
                  <p>I wish I could tell you, my donor, how grateful I am for your selfless act. You gave me a new lease on life. We may be coworkers or schoolmates, or just two people in the same community. I'm very grateful to you.</p>
                  <h6>Brandon Munson</h6>
                  <span>CTO, Fulcrum Design, USA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="controls">
          <label htmlFor="slide1"></label>
          <label htmlFor="slide2"></label>
          <label htmlFor="slide3"></label>
        </div>
        <div id="bullets">
          <label htmlFor="slide1"></label>
          <label htmlFor="slide2"></label>
          <label htmlFor="slide3"></label>
        </div>
      </div>
    </div>
  );
};

export default OpinionCarousel;
