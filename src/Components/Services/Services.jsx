import React from "react";
import './Services.css';
import serviceImage1 from '../../assets/services-5.jpg';
import serviceImage2 from '../../assets/services-4.jpg';
import serviceImage3 from '../../assets/services-6.jpg';

const Services = () => {
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
    <div className="services-box">
      <div className="header">
        <h2>Our Services</h2>
      </div>
      <div className="grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.title} />
            <div className="card-content">
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
              {service.button && (
                <a href="/" className="learn-more">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="11"
                    viewBox="0 0 17 11"
                    fill="none"
                    className="inline-block ml-2"
                  >
                    <path
                      d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.88246 15.2929 4.69194L12 1.39905415 5.39905L1 5.39985"
                      stroke="#4CAF50"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
