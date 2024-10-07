import React, { useEffect, useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [completedProjects, setCompletedProjects] = useState(0);
  const [yearsExperience, setYearsExperience] = useState(0);
  const [ongoingProjects, setOngoingProjects] = useState(0);
  const [colleagues, setColleagues] = useState(0);

  const finalValues = {
    completedProjects: 512,
    yearsExperience: 20,
    ongoingProjects: 32,
    colleagues: 1520,
  };

  const animateCounter = (setState, endValue) => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const incrementTime = Math.ceil(duration / endValue);
    const interval = setInterval(() => {
      if (start < endValue) {
        setState(start);
        start += 1;
      } else {
        clearInterval(interval);
      }
    }, incrementTime);

    return () => clearInterval(interval); 
  };

  useEffect(() => {
    animateCounter(setCompletedProjects, finalValues.completedProjects);
    animateCounter(setYearsExperience, finalValues.yearsExperience);
    animateCounter(setOngoingProjects, finalValues.ongoingProjects);
    animateCounter(setColleagues, finalValues.colleagues);
  }, []);

  return (
    <div className="counter">
      <div className="left-side">
        <h2>Build Your Dream</h2>
        <h3>25 Years Of Undefeated Success</h3>
        <p>
          Ibhimani.inc is a cutting-edge IT company dedicated to delivering
          innovative solutions tailored to meet the evolving needs of businesses
          in today’s digital landscape. As an old player in the industry,
          Ibhimani.inc is driven by a passion for technology and a commitment to
          excellence.
        </p>
        <button>Learn More</button>
      </div>
      <div className="right-side">
        <div className="counter-container">
          <div className="counter-grid">
            <div className="counter-item">
              <h2>{completedProjects}+</h2>
              <p>Successfully Projects Finished.</p>
            </div>
            <div className="counter-item">
              <h2>{yearsExperience}+</h2>
              <p>Years of experience with pride</p>
            </div>
            <div className="counter-item">
              <h2>{ongoingProjects}+</h2>
              <p>Ongoing Projects</p>
            </div>
            <div className="counter-item">
              <h2>{colleagues}+</h2>
              <p>Colleagues & counting more daily</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
