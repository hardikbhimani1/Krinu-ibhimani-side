import React from "react";
import Photo1 from "../../assets/1-6.png";
import Photo2 from "../../assets/2-8.png";
import Photo3 from "../../assets/3-8.png";
import { Slide, Fade } from "react-awesome-reveal";
import './Project.css'; // Import the CSS file

const CardsData = [
  {
    id: 1,
    img: Photo1,
    title: "Shiva Enterprise",
    desc: "Ahmedabad, India",
  },
  {
    id: 2,
    img: Photo2,
    title: "Deluxe International",
    desc: "Rajkot, Gujarat",
  },
  {
    id: 3,
    img: Photo3,
    title: "Voravka Pro",
    desc: "Toronto, CA",
  },
];

const Project = () => {
  return (
    <div className="poject-container">
      <h1 className="header">Our Latest Works</h1>
      <div className="card-grid">
        {CardsData.map(({ id, img, title, desc }) => {
          return (
            <div key={id} className="card">
              <img src={img} alt="" className="card-image" />
              {/* overlay section */}
              <div className="overlay">
                <div className="overlay-content">
                  <Slide cascade>
                    <h1 className="overlay-title">{title}</h1>
                    <Fade cascade damping={0.05}>
                      <p>{desc}</p>
                    </Fade>
                    <div>
                      <button className="view-button">View</button>
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
