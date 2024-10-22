import React from "react";
import "./Business.css";
import phoneTradeInCard from "../../../assets/iphone-trade-in-card.jpg";
import customiseYourMac from "../../../assets/customise-your-mac.jpg";
import tradeInCardAtStore from "../../../assets/trade-in-card-at-store.jpg";
import engravingCard from "../../../assets/engraving-card.jpg";
import businessCard from "../../../assets/business-card.jpg";
import financingCard from "../../../assets/financing-card.jpg";
import freeDelivery from "../../../assets/free-delivery.jpg";
import educationCard from "../../../assets/education-card.jpg";

const Business = () => {
  const scrollLeft = () => {
    const container = document.querySelector(".business-cards-list");
    container.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    const container = document.querySelector(".business-cards-list");
    container.scrollBy({ left: 300, behavior: "smooth" });
  };
  return (
    <>
      <div className="business-main-text">
        <div>
          <h2 className="business-main-text-h1" style={{ color: "#8405CD" }}>
            The Apple Store difference.{" "}
            <span
              className="business-main-text-span"
              style={{ color: "#6A696D" }}
            >
              More ways to celebrate with us.
            </span>
          </h2>
        </div>
      </div>
      <div className="business-cards-list">
        <div className="small-cards-container">
          <div className="small-card-column">
            <div className="business-cards small-card">
              <div className="business-image" style={{ paddinTop: "7px" }}>
                <img src={phoneTradeInCard} alt="Phone Trade In" />
              </div>
              <div style={{ margin: "5px" }}>
                <div className="business-title-h1">
                  <h1 className="b-title">SMART PHONE</h1>
                </div>
                <div className="business-desc">
                  <p className="b-desc">
                    Exchange your smartphone, get . ₹4000.00 – ₹67500.00 in
                    credit towards a new one.*
                  </p>
                </div>
              </div>
            </div>
            <div className="business-cards small-card">
              <div className="business-image" style={{ paddinTop: "7px" }}>
                <img src={customiseYourMac} alt="Customise Your Mac" />
              </div>
              <div style={{ margin: "5px" }}>
                <div className="business-title-h1">
                  <h1 className="b-title">MAC</h1>
                </div>
                <div className="business-desc">
                  <p className="b-desc">Customise Your Mac</p>
                </div>
              </div>
            </div>
          </div>
          <div className="small-card-column">
            <div className="business-cards small-card">
              <div className="business-image" style={{ paddinTop: "7px" }}>
                <img src={tradeInCardAtStore} alt="Customise Your Mac" />
              </div>
              <div style={{ margin: "5px" }}>
                <div className="business-title-h1">
                  <h1 className="b-title">WATCH</h1>
                </div>
                <div className="business-desc">
                  <p className="b-desc">
                    Trade in your eligible Mac, Apple Watch or iPad for instant
                    credit.
                  </p>
                </div>
              </div>
            </div>
            <div className="business-cards small-card">
              <div className="business-image">
                <img src={engravingCard} alt="Customise Your Mac" />
              </div>
              <div style={{ margin: "5px" }}>
                <div className="business-title-h1">
                  <h1 className="b-title">EMOJI</h1>
                </div>
                <div className="business-desc">
                  <p className="b-desc">
                    Make them yours Engrave a mix of emoji, names and numbers
                    for free.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="small-card-column">
            <div className="business-cards small-card">
              <div className="business-image" style={{ paddinTop: "7px" }}>
                <img src={financingCard} alt="Customise Your Mac" />
              </div>
              <div style={{ margin: "5px" }}>
                <div className="business-title-h1">
                  <h1 className="b-title">CASHBACK</h1>
                </div>
                <div className="business-desc">
                  <p className="b-desc">
                    Instant cashback <br /> Plus No Cost EMI.
                  </p>
                </div>
              </div>
            </div>
            <div className="business-cards small-card">
              <div className="business-image">
                <img src={freeDelivery} alt="Customise Your Mac" />
              </div>
              <div style={{ margin: "5px" }}>
                <div className="business-title-h1">
                  <h1 className="b-title">DELIVERY</h1>
                </div>
                <div className="business-desc">
                  <p className="b-desc">
                    Enjoy free delivery, or easy pickup from an Apple Store..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="business-cards big-card">
          <div className="business-image">
            <img src={businessCard} alt="ss" />
          </div>
          <div style={{ margin: "5px" }}>
            <div className="business-title-h1">
              <h1 className="b-title">BUSINESS</h1>
            </div>
            <div className="business-desc">
              <p className="b-desc">
                From enterprise to small business, we'll work with you.
              </p>
            </div>
          </div>
        </div>
        <div className="business-cards big-card">
          <div className="business-image">
            <img src={educationCard} alt="ss" />
          </div>
          <div style={{ margin: "5px" }}>
            <div className="business-title-h1">
              <h1 className="b-title">EDUCATION</h1>
            </div>
            <div className="business-desc">
              <p className="b-desc">
                Buy a new Mac or iPad with education savings. <sup>1</sup>{" "}
              </p>
            </div>
          </div>
        </div>

      </div>
      <div style={{ display: "flex", justifyContent: "end" }}>
          <div className="leftside-icon">
            <button
              onClick={scrollLeft}
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
    </>
  );
};

export default Business;
