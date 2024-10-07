import React from "react";
import './Project.css';
import Nevbar from '../Navbar/Navbar';
import Counter from "../Counter/Counter";

const Project = ({ image }) => {
  return (
    <>
       <Counter/>
      <div className="project-container">
        <h2>Project Content</h2>
        <img src={image} alt="Project" className="project-image" />
      </div>
    </>
  );
};

export default Project;
