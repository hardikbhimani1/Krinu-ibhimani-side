import React, { useState } from "react";
import "./AliBabaMiniSite.css";
import AliBabaMiniSiteBG from "../../assets/alibabaminiside.png";
import serviceLine from "../../assets/line-services.png";
import Navbar from "../Navbar/Navbar";
import serviceImage1 from "../../assets/services-5.jpg";
import serviceImage2 from "../../assets/services-4.jpg";
import serviceImage3 from "../../assets/services-6.jpg";
import plusIcon from "../../assets/Plus-Icon.svg";
import usaIcon from "../../assets/usa.png";

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
  ];

  const [expandedStates, setExpandedStates] = useState([false, false]);

  const toggleContent = (index) => {
    setExpandedStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const content1 = (
    <>
      <h4>What is Lorem Ipsum?</h4>
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
      <h4>Why do we use it?</h4>
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
          <div className="cards-list">
            {services.map((service) => (
              <div className="cards" key={service.id}>
                <div className="image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="title">
                  <h1>{service.title}</h1>
                </div>
                <div className="minisite-desc">
                  <div className="usa-icon">
                    <img className="usa-icon" src={service.icon} />
                  </div>
                </div>
                <div className="plus-icon">
                  <img className="icon" src={plusIcon} />
                </div>
              </div>
            ))}
          </div>

          <div className="description">
            <h3 className="minisite-title-of-desc">
              <span className="highlight">A next-level</span> digital experience
              crafted with beautiful, game-changing Mini-site design.
            </h3>
            <p className="minisite-text-of-desc">
              {expandedStates[0]
                ? content1
                : "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's..."}
              <span className="read-more" onClick={() => toggleContent(0)}>
                {expandedStates[0] ? " Read Less" : " ... Read More"}
              </span>
            </p>
          </div>

          <div className="description">
            <h3 className="minisite-title-of-desc">
              <span className="highlight">Transforming</span> the ordinary
              business into the extraordinary with{" "}
              <span className="highlight">Revolutionary</span> Mini-site
            </h3>
            <p className="minisite-text-of-desc">
              {expandedStates[1]
                ? content2
                : "Why do we use it?  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point..."}
              <span className="read-more" onClick={() => toggleContent(1)}>
                {expandedStates[1] ? " Read Less" : " ... Read More"}
              </span>
            </p>
          </div>
          <div>
            <h3 className="minisite-of-desc">
              Experience the benefits of our exceptional{" "}
              <span className="green-highlight">Minisite Designs.</span>
            </h3>
          </div>
          <div style={{display:"flex",paddingTop:"20px",marginTop:"30px",justifyContent:"space-between"}}>
            <h1 className="elegant-title">Elegant Minisite</h1>
            <h3 className="elegant-desc">Discover the excellence in our Minisite offerings</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default AliBabaMiniSite;
