import { useState } from 'react';
import './AgeGate.css';

export default function AgeGate({ onVerify }) {
  const [attempted, setAttempted] = useState(false);

  const handleVerify = (isOldEnough) => {
    if (isOldEnough) {
      onVerify();
    } else {
      setAttempted(true);
    }
  };

  if (attempted) {
    return (
      <div className="age-gate denied">
        <div className="age-gate-content">
          <div className="warning-icon">
            <i className="fas fa-ban"></i>
          </div>
          <h2>Access Denied</h2>
          <p>You must be 21 years or older to access this website.</p>
          <p className="small-text">
            This site contains content related to alcoholic beverages and is intended for adults of legal drinking age only.
          </p>
          <button 
            className="back-btn"
            onClick={() => setAttempted(false)}
          >
            <i className="fas fa-arrow-left"></i> Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="age-gate">
      <div className="age-gate-content">
        <div className="age-gate-header">
          <h1><i className="fas fa-cocktail"></i> The Liquor Lounge</h1>
          <p className="tagline">Premium Spirits & Craft Beverages</p>
        </div>
        
        <div className="age-verification-card">
          <h2>Age Verification Required</h2>
          
          <div className="legal-notice">
            <i className="fas fa-exclamation-triangle"></i>
            <p>
              This website contains content related to alcoholic beverages and is intended 
              for adults of legal drinking age only. By entering this site, you certify 
              that you are of legal drinking age in your country of residence.
            </p>
          </div>
          
          <div className="verification-question">
            <h3>Are you 21 years of age or older?</h3>
          </div>
          
          <div className="button-container">
            <button 
              className="age-btn yes-btn"
              onClick={() => handleVerify(true)}
            >
              <i className="fas fa-check-circle"></i> Yes, I am 21+
            </button>
            <button 
              className="age-btn no-btn"
              onClick={() => handleVerify(false)}
            >
              <i className="fas fa-times-circle"></i> No, I am under 21
            </button>
          </div>
          
          <div className="age-disclaimer">
            <p><i className="fas fa-lock"></i> Your response will be stored locally in your browser.</p>
            <p>Legal drinking age varies by country. In the United States, you must be 21 or older.</p>
          </div>
        </div>
      </div>
    </div>
  );
}