import React from "react";
import './Client.css'
import client from "../../assets/Clients.png";
import client1 from "../../assets/Clients1.png";
import client2 from "../../assets/Clients2.png";
import client3 from "../../assets/Clients3.png";
import client4 from "../../assets/Clients4.png";

const clients = [client, client1, client2, client3, client4];

const Client = () => {
  return (
    <div className="clients-container">
      <div className="header">
        <h2>Our Amazing Clients</h2>
      </div>
      <div className="marquee">
        {[...clients, ...clients, ...clients].map((src, index) => (
          <span key={index} className="client-icon">
            <a href={src} target="_blank" rel="noopener noreferrer">
              <img
                src={src}
                alt={`Client ${index + 1}`}
                className="icons"
              />
            </a>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Client;
