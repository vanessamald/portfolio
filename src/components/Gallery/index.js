import React, { useState } from 'react';

// images
import RunBuddy from "../.././assets/images/run-buddy.png";
import portfolioImage from "../.././assets/images/portfolio_screenshot.jpg"
import timedQuiz from "../.././assets/images/timed-quiz.jpg";
import timedQuiz2 from "../.././assets/images/timed-quiz2.jpg";
import timedQuiz3 from "../.././assets/images/timed-quiz3.jpg";
import weatherDashboard from "../.././assets/images/weather-dashboard.jpg";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      fullscreen: true,
      breakpoint: 'xs',
    };
  }

  handleShow = (breakpoint) => {
    this.setState({
      show: true,
      fullscreen: breakpoint === 'xs' ? true : false,
    });
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  render() {
    const { show, fullscreen, breakpoint } = this.state;
    return (
        <div>
            <div className="gallery">
            <div className="gallery-header">
                <h1>My Work</h1>
            </div>
            <div className="gallery-body">
                
                <div>
                    <h2>Friends Timed Quiz</h2>
                    <img src={timedQuiz} alt="timed quiz landing page image" width="100%" ></img>
                    <p>HTML, CSS, JAVASCRIPT</p>
                    <img src={timedQuiz2} alt="timed quiz page" width="100%" ></img>
                    <img src={timedQuiz3} alt="timed quiz page" width="100%" ></img>
                </div>
                <div>
                    <h2>Portfolio</h2>
                    <img src={portfolioImage} alt="Portfolio website" width="100%" ></img>
                </div>
                <div>
                    <h2>Weather Dashboard</h2>
                    <img src={weatherDashboard} alt="weather dashboard website" width="100%" ></img>
                </div>
                <div>
                    <h2>Run Buddy</h2>
                    <img src={RunBuddy} alt="Run Buddy Website" width='100%' ></img>
                </div>
            </div>
            </div>
</div>

    )}
};

export default Gallery;

       
       
