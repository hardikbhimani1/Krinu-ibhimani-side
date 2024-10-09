import React, { useEffect, useState } from "react";
import "./Hero.css";
import banner from "../../assets/banner.jpg";
import banner1 from "../../assets/image3.png";
import banner2 from "../../assets/image2.png";
import video from "../../assets/video1.mp4";
import pauseIcon from "../../assets/pause_icon.png";
import playIcon from "../../assets/play_icon.png";

const Hero = () => {
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <div className="hero">
      {playStatus ? (
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : heroCount === 0 ? (
        <img className="background" src={banner} alt="Banner" />
      ) : heroCount === 1 ? (
        <img className="background" src={banner1} alt="Banner 1" />
      ) : heroCount === 2 ? (
        <img className="background" src={banner2} alt="Banner 2" />
      ) : null}
      <div className="hero-text">
        <h2>Build Your Digital Space With</h2>
        <h1>Thriving Innovation</h1>
        <p>
          ibhimani Inc. facilitates the digital place for your organization and
          provides an innovative solution that puts your organization to new
          heights in the 21st century.
        </p>

        <button className="btn"> Our Service </button>
        <div className="hero-dot-play">
          <ul className="hero-dots">
            <li
              onClick={() => setHeroCount(0)}
              className={heroCount === 0 ? "hero-dot orage" : "hero-dot"}
            ></li>
            <li
              onClick={() => setHeroCount(1)}
              className={heroCount === 1 ? "hero-dot orage" : "hero-dot"}
            ></li>
            <li
              onClick={() => setHeroCount(2)}
              className={heroCount === 2 ? "hero-dot orage" : "hero-dot"}
            ></li>
          </ul>
          <div className="hero-play">
            <img className="play-button"
              onClick={() => setPlayStatus(!playStatus)}
              src={playStatus ? pauseIcon : playIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
