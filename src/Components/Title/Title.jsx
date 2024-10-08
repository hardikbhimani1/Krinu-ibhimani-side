import React from "react";
import "./Title.css";

const Title = ({letters}) => {
  return (
    <div>
      <h1 className="title">
        {letters.map((letter, index) => 
          <span key={index} className={letter === " " ? "space" : ""}>
            {letter}
          </span>
        )}
      </h1>
    </div>
  );
};

export default Title;
