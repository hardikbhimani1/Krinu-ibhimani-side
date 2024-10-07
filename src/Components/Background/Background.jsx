import React from "react";
import "./Background.css";
import banner from "../../assets/banner.jpg";
import video from "../../assets/video1.mp4";
import banner2 from "../../assets/image1.png";
import banner3 from "../../assets/image2.png";

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className="background" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={banner} className="background" alt="" />;
  } else if (heroCount === 1) {
    return <img src={banner2} className="background" alt="" />;
  } else if (heroCount === 2) {
    return <img src={banner3} className="background" alt="" />;
  }
};

export default Background;
