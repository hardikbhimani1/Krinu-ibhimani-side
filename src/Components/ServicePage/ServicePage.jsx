import React from "react";
import "./ServicePage.css";
import serviceBG from "../../assets/serviceBg.jpg";
import serviceBGEffect from "../../assets/ServiceEffect2.png";
import serviceLine from "../../assets/line-services.png";
import Navbar from "../Navbar/Navbar";
import serviceImage1 from "../../assets/services-5.jpg";
import serviceImage2 from "../../assets/services-4.jpg";
import serviceImage3 from "../../assets/services-6.jpg";

const ServicePage = () => {
  const services = [
    {
      id: 1,
      title: "Alibaba Minisite",
      desc: "Ibhimani designs engaging Alibaba minisites that showcase your brand and products for maximum impact.",
      button: true,
      image: serviceImage2,
    },
    {
      id: 2,
      title: "Alibaba Product Listing",
      desc: "Ibhimani creates eye-catching Alibaba product listings with clear descriptions and images to boost sales.",
      button: true,
      image: serviceImage1,
    },
    {
      id: 3,
      title: "Alibaba Product Optimization",
      desc: "Ibhimani offers Alibaba product optimization to enhance visibility, improve listings, and drive more sales.",
      button: true,
      image: serviceImage3,
    },
  ];

  return (
    <>
      <Navbar Header={true} />
      <div className="service-container">
        <div className="image-wrapper">
          <img src={serviceBG} alt="Banner" className="service-bg" />
          <div className="service-overlay" />
        </div>
        <h1 className="service-title">Service</h1>
        <h3 className="service-text">Home &gt; Service</h3>
        <img src={serviceBGEffect} alt="Effect" className="service-effect" />
        <img src={serviceLine} alt="Effect" className="service-line" />
      </div>
      <div className="service-container">
        <div className="services">
          <h3 className="our-service-tag">OUR SERVICES</h3>
          <h1 className="our-service-desc">We Provide the Best Quality</h1>
          <div className="cards-list">
            {services.map((service) => (
              <div className="cards" key={service.id}>
                <div className="image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="title">
                  <h1>{service.title}</h1>
                </div>
                <div className="desc">
                  <p>{service.desc}</p>
                  <button>Click On</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
