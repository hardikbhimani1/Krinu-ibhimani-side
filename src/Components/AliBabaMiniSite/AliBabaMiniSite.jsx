import React, { useRef, useState } from "react";
import "./AliBabaMiniSite.css";
import AliBabaMiniSiteBG from "../../assets/alibabaminiside.png";
import serviceLine from "../../assets/line-services.png";
import Navbar from "../Navbar/Navbar";
import serviceImage1 from "../../assets/fc_creativity.jpg";
import serviceImage2 from "../../assets/fc_entertainment.jpg";
import serviceImage3 from "../../assets/fc_learning.jpg";
import serviceImage4 from "../../assets/fc_productivity.jpg";
import serviceImage5 from "../../assets/iphone-teb.jpg";
import plusIcon from "../../assets/Plus-Icon.svg";
import usaIcon from "../../assets/usa.png";
import appleWatchUltra from "../../assets/apple-watch-ultra.jpg";
import MiniSiteModel from "../MiniSiteModel/MiniSiteModel";

const AliBabaMiniSite = () => {
  const services = [
    {
      id: 1,
      title: "Shiva Enterprise",
      icon: usaIcon,
      image: serviceImage1,
    },
    {
      id: 2,
      title: "Shiva Enterprise",
      icon: usaIcon,
      image: serviceImage2,
    },
    {
      id: 3,
      title: "Shiva Enterprise",
      icon: usaIcon,
      image: serviceImage3,
    },
    {
      id: 4,
      title: "Shiva Enterprise",
      icon: usaIcon,
      image: serviceImage4,
    },
    {
      id: 5,
      title: "Shiva Enterprise",
      icon: usaIcon,
      image: serviceImage5,
    },
  ];

  const [expandedStates, setExpandedStates] = useState([false, false]);
  const scrollContainerRef = useRef(null);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  const toggleContent = (index) => {
    console.log(index, "index");
    setExpandedStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

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
  const content1 = (
    <>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </>
  );

  const content2 = (
    <>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
    </>
  );

  return (
    <>
      <Navbar Header={true} />
      <div className="minisite-container">
        <div className="image-wrapper">
          <img src={AliBabaMiniSiteBG} alt="Banner" className="minisite-bg" />
          <div className="minisite-overlay" />
        </div>
        <h1 className="minisite-title">Alibaba Minisite</h1>
        <h3 className="minisite-text">
          Home &gt; Service &gt; AliBaba Minisite
        </h3>
        <img src={serviceLine} alt="Effect" className="minisite-line" />
      </div>
      <div className="minisite-text-container">
        <div className="minisite">
          <h3 className="our-minisite-tag">Alibaba Minisite</h3>
          <h1 className="our-minisite-desc">The Design That Speaks</h1>
          <div className="get-title">
            <h2 className="get-title-h1">Get to know iPad.</h2>
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
                <div
                  className="plus-icon"
                  onClick={() => setPopupVisible(true)}
                >
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

          <div className="description">
            <div className="content-box">
              <h3 className="minisite-title-of-desc">
                <span className="highlight">A next-level</span> digital
                experience crafted with beautiful, game-changing Mini-site
                design.
              </h3>
              <h4>What is Lorem Ipsum?</h4>
              <p>
                {expandedStates[0]
                  ? content1
                  : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's..."}
              </p>
              <span className="read-more" onClick={() => toggleContent(0)}>
                {expandedStates[0] ? " Read Less" : " ... Read More"}
              </span>
            </div>

            <div className="content-box">
              <h3 className="minisite-title-of-desc">
                <span className="highlight">Transforming</span> the ordinary
                business into the extraordinary with{" "}
                <span className="highlight">Revolutionary</span> Mini-site
              </h3>
              <h4>Why do we use it?</h4>
              <p>
                {expandedStates[1]
                  ? content2
                  : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..."}
              </p>
              <span className="read-more" onClick={() => toggleContent(1)}>
                {expandedStates[1] ? " Read Less" : " ... Read More"}
              </span>
            </div>
          </div>

          <div>
            <h3 className="minisite-of-desc">
              Experience the benefits of our exceptional{" "}
              <span className="green-highlight">Minisite Designs.</span>
            </h3>
          </div>
          <div className="elegant" >
            <h1 className="elegant-title">Elegant Minisite</h1>
            <h3 className="elegant-desc">
              Discover the excellence in <br /> our Minisite offerings.
            </h3>
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
      {popupVisible && <MiniSiteModel onClose={() => setPopupVisible(false)} />}
    </>
  );
};

export default AliBabaMiniSite;
