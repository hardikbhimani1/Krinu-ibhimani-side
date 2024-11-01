import React from "react";
import "./ServicePage.css";
import serviceBG from "../../assets/serviceBg.jpg";
import serviceBGEffect from "../../assets/ServiceEffect2.png";
import serviceLine from "../../assets/line-services.png";
import Navbar from "../Navbar/Navbar";
import serviceImage1 from "../../assets/services-5.jpg";
import serviceImage2 from "../../assets/services-4.jpg";
import serviceImage3 from "../../assets/services-6.jpg";
import { Link } from "react-router-dom";

const ServicePage = () => {
  const services = [
    {
      id: 1,
      title: "Alibaba Minisite",
      desc: "Ibhimani designs engaging Alibaba minisites that showcase your brand and products for maximum impact.",
      button: true,
      image: serviceImage2,
      link: "/minisite"
    },
    {
      id: 2,
      title: "Alibaba Product Listing",
      desc: "Ibhimani creates eye-catching Alibaba product listings with clear descriptions and images to boost sales.",
      button: true,
      image: serviceImage1,
      link:"/product-listing"
    },
    {
      id: 3,
      title: "Alibaba Product Optimization",
      desc: "Ibhimani offers Alibaba product optimization to enhance visibility, improve listings, and drive more sales.",
      button: true,
      image: serviceImage3,
      link:"/product-optimization"
    },
  ];

  return (
    <>
      <Navbar Header={true} />
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
                  <p className="service-text-desc">{service.desc}</p>
                  <Link to={service.link}>
                    <button className="click-button">Click On</button>
                  </Link>
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
