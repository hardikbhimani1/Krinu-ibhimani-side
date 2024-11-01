import React, { useEffect, useRef, useState } from "react";
import plusIcon from "../../../assets/Plus-Icon.svg";
import appleWatchUltra from "../../../assets/apple-watch-ultra.jpg";

function ServiceBlog({title,desc,cardTitle,services}) {
  
    const [isLeftDisabled, setIsLeftDisabled] = useState(true);
    const scrollContainerRef = useRef(null);
    const [isRightDisabled, setIsRightDisabled] = useState(false);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -500,
        behavior: "smooth",
      });
      updateButtonStates();
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 500,
        behavior: "smooth",
      });
      updateButtonStates();
    }
  };

  const updateButtonStates = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setIsLeftDisabled(scrollLeft === 0);
      setIsRightDisabled(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  return (
    <div className="minisite-text-container">
      <div className="minisite">
        <h3 className="our-minisite-tag">{title}</h3>
        <h1 className="our-minisite-desc">{desc}</h1>
        <div className="get-title">
          <h2 className="get-title-h1">{cardTitle}</h2>
        </div>
        <div
          className="minisite-cards-list"
          ref={scrollContainerRef}
          onScroll={updateButtonStates}
        >
          {services.map((service) => (
            <div className="minisite-cards" key={service.id}>
              <div className="minisite-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div style={{ margin: "5px" }}>
                <div className="minisite-title-h1">
                  <h1>{service.title}</h1>
                </div>
                <div className="minisite-desc">
                  <div className="usa-icon">
                    <img className="usa-icon" src={service.icon} />
                  </div>
                </div>
              </div>
              <div className="plus-icon" onClick={() => setPopupVisible(true)}>
                <img className="icon" src={plusIcon} />
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "end" }}>
          <div className="leftside-icon">
            <button
              onClick={scrollLeft}
              disabled={isLeftDisabled}
              className="scoll-icon"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                <path d="M21.559,12.062 L15.618,17.984 L21.5221,23.944 C22.105,24.533 22.1021,25.482 21.5131,26.065 C21.2211,26.355 20.8391,26.4999987 20.4571,26.4999987 C20.0711,26.4999987 19.6851,26.352 19.3921,26.056 L12.4351,19.034 C11.8531,18.446 11.8551,17.4999987 12.4411,16.916 L19.4411,9.938 C20.0261,9.353 20.9781,9.354 21.5621,9.941 C22.1471,10.528 22.1451,11.478 21.5591,12.062 L21.559,12.062 Z"></path>
              </svg>
            </button>
          </div>

          <div className="rightside-icon">
            <button
              onClick={scrollRight}
              disabled={isRightDisabled}
              className="scoll-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36 36"
                fill="#636365"
              >
                <path d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="elegant-images">
          <img
            className="elegant-image"
            src={appleWatchUltra}
            alt="service-Image"
          />
        </div>
      </div>
    </div>
  );
}

export default ServiceBlog;
