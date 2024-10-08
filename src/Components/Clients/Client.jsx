import React from "react";
import './Client.css'
import client from "../../assets/Clients.png";
import client1 from "../../assets/Clients1.png";
import client2 from "../../assets/Clients2.png";
import client3 from "../../assets/Clients3.png";
import client4 from "../../assets/Clients4.png";
import Title from "../Title/Title";

const clients = [client, client1, client2, client3, client4];
const letters = [
  "O", "U", "R", 
  " ",
  "A", "M", "A", "Z", "I", "N", "G", 
  " ",
  "C", "L", "I", "E", "N", "T", "S"
];

const Client = () => {
  return (
    <div className="clients-container">
      <div className="header">
        <Title letters={letters}/>
      </div>
      <div className="marquee">
        {[...clients, ...clients, ...clients].map((src, index) => (
          <span key={index} className="client-icon">
            <a href={src} target="_blank" rel="noopener noreferrer">
              <img
                src={src}
                alt={`Client ${index + 1}`}
                className="icon"
              />
            </a>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Client;
