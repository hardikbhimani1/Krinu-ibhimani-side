import React, { useEffect } from "react";
import "./MiniSiteModel.css";
import serviceImages from '../../assets/modal_health_sleep.jpg';
import serviceImages1 from '../../assets/modal_health.jpg';

const MiniSiteModel = ({ onClose }) => {
    useEffect(() => {
        document.body.classList.add('modal-open');
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="fixed-top" />
        <div style={{ width: "100%" }}>
          <h2 className="model-title">Service Details</h2>
          <div>
            <img className="model-image" src={serviceImages} alt="service-images" />
          </div>
          <div>
            <img className="model-image" src={serviceImages1} alt="service-images" />
          </div>
        </div>
        <div className="fixed-bottom" />
        <div className="close">
          <button onClick={onClose} className="close-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="close-icon"
            >
              <path d="M12.12,10l4.07-4.06a1.5,1.5,0,1,0-2.11-2.12L10,7.88,5.94,3.81A1.5,1.5,0,1,0,3.82,5.93L7.88,10,3.81,14.06a1.5,1.5,0,0,0,0,2.12,1.51,1.51,0,0,0,2.13,0L10,12.12l4.06,4.07a1.45,1.45,0,0,0,1.06.44,1.5,1.5,0,0,0,1.06-2.56Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiniSiteModel;
