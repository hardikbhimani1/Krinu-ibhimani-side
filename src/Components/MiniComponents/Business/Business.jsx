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
  return (
    <div className="business-cards-list">
      <div className="small-cards-container">
        <div className="small-card-column">
          <div className="business-cards small-card">
            <div className="business-image">
              <img src={phoneTradeInCard} alt="Phone Trade In" />
            </div>
            <div style={{ margin: "5px" }}>
              <div className="business-title-h1">
                <h1>SMART PHONE</h1>
              </div>
              <div className="business-desc">
                <p>
                  Exchange your smartphone, get . ₹4000.00 – ₹67500.00 in credit
                  towards a new one.*
                </p>
              </div>
            </div>
          </div>
          <div className="business-cards small-card">
            <div className="business-image">
              <img src={customiseYourMac} alt="Customise Your Mac" />
            </div>
            <div style={{ margin: "5px" }}>
              <div className="business-title-h1">
                <h1>MAC</h1>
              </div>
              <div className="business-desc">
                <p>Customise Your Mac</p>
              </div>
            </div>
          </div>
        </div>
        <div className="small-card-column">
          <div className="business-cards small-card">
            <div className="business-image">
              <img src={tradeInCardAtStore} alt="Customise Your Mac" />
            </div>
            <div style={{ margin: "5px" }}>
              <div className="business-title-h1">
                <h1>WATCH</h1>
              </div>
              <div className="business-desc">
                <p>Trade in your eligible Mac, Apple Watch or iPad for instant credit.</p>
              </div>
            </div>
          </div>
          <div className="business-cards small-card">
            <div className="business-image">
              <img src={engravingCard} alt="Customise Your Mac" />
            </div>
            <div style={{ margin: "5px" }}>
              <div className="business-title-h1">
                <h1>EMOJI</h1>
              </div>
              <div className="business-desc">
                <p>Make them yours Engrave a mix of emoji, names and numbers for free.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="small-card-column">
          <div className="business-cards small-card">
            <div className="business-image">
              <img src={financingCard} alt="Customise Your Mac" />
            </div>
            <div style={{ margin: "5px" }}>
              <div className="business-title-h1">
                <h1>CASHBACK</h1>
              </div>
              <div className="business-desc">
                <p>Instant cashback <br/> Plus No Cost EMI.</p>
              </div>
            </div>
          </div>
          <div className="business-cards small-card">
            <div className="business-image">
              <img src={freeDelivery} alt="Customise Your Mac" />
            </div>
            <div style={{ margin: "5px" }}>
              <div className="business-title-h1">
                <h1>DELIVERY</h1>
              </div>
              <div className="business-desc">
                <p>Enjoy free delivery, or easy pickup from an Apple Store..</p>
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
            <h1>BUSINESS</h1>
          </div>
          <div className="business-desc">
            <p>From enterprise to small business, we'll work with you.</p>
          </div>
        </div>
      </div>
      <div className="business-cards big-card">
        <div className="business-image">
          <img src={educationCard} alt="ss" />
        </div>
        <div style={{ margin: "5px" }}>
          <div className="business-title-h1">
            <h1>EDUCATION</h1>
          </div>
          <div className="business-desc">
            <p>Buy a new Mac or iPad with education savings.</p>
            <sup>1</sup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
